import { Component, inject, input } from '@angular/core';
import { PlaylistEditButtonComponent } from './edit-button.component';
import { Chapter, VideoItem } from '../../../core/models';
import { getVideFilePath } from '../../../shared/helpers/video';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-playlist-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  imports: [PlaylistEditButtonComponent],
})
export class PlaylistLayoutComponent {
  readonly router = inject(Router);
  readonly route = inject(ActivatedRoute);
  readonly getVideFilePath = getVideFilePath;

  readonly video = input<VideoItem>();
  readonly currentTime = input<number>(0);

  get chapters(): Chapter[] {
    return this.video()?.meta?.chapters || [];
  }

  isActive(chapter: Chapter) {
    const currentTime = this.currentTime();
    return (
      currentTime >= chapter.startInSeconds &&
      currentTime <= chapter.endInSeconds
    );
  }

  seekToChapter(chapter: Chapter) {
    this.router.navigate(['./'], {
      relativeTo: this.route,
      queryParams: {
        end: chapter.endInSeconds,
        start: chapter.startInSeconds,
        // ts: new Date().getTime(),
      },
    });
  }
}
