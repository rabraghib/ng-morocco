import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  ViewEncapsulation,
  effect,
  inject,
  input,
  output,
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
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    // tricks for making embed iframe video responsive
    .app-video-player {
      position: relative;
      width: 100%;
      padding-top: 56.25%;
      &::before {
        box-sizing: border-box;
        display: block;
        content: '';
      }
      youtube-player youtube-player-placeholder,
      youtube-player iframe,
      youtube-player > div {
        width: 100% !important;
        height: 100% !important;
      }
    }
  `,
})
export class VideoPlayerComponent {
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
    effect(() => {
      this.player().seekTo(this.startSeconds(), true);
    });
  }
}
