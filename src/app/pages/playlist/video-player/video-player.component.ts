import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  OnInit,
  effect,
  inject,
  input,
  output,
  runInInjectionContext,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { YouTubePlayer, YouTubePlayerModule } from '@angular/youtube-player';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [YouTubePlayerModule],
  templateUrl: './video-player.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoPlayerComponent implements OnInit {
  readonly videoId = input<string>();
  readonly startSeconds = input<number>(0);
  readonly endSeconds = input<number>(0);
  readonly currentTime = output<number>();

  readonly injector = inject(Injector);

  readonly player = viewChild.required(YouTubePlayer);

  constructor() {
    interval(1000)
      .pipe(
        takeUntilDestroyed(),
        map(() => Math.floor(this.player().getCurrentTime())),
      )
      .subscribe((time) => this.currentTime.emit(time));
  }

  ngOnInit() {
    const duration = this.player().getDuration();
    this.seekToStartTime();
    this.player().stateChange.subscribe((_) => {
      const currentTime = this.player().getCurrentTime();
      if (currentTime >= duration && duration > 0) {
        this.seekToStartTime();
      }
    });
    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.seekToStartTime();
      });
    });
  }

  seekToStartTime() {
    const duration = this.player().getDuration();
    const isOutOfRange =
      this.startSeconds() < 0 ||
      (this.startSeconds() > duration && duration > 0);
    this.player().seekTo(isOutOfRange ? 0 : this.startSeconds(), true);
    this.player().playVideo();
  }
}
