import { injectLoad } from '@analogjs/router';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MarkdownModule } from 'ngx-markdown';
import { PlaylistLayoutComponent } from './layout/layout.component';
import { load } from './[videoId].server';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { PlaylistEditButtonComponent } from './layout/edit-button.component';
import { getVideFilePath } from '../../shared/helpers/video';

@Component({
  standalone: true,
  imports: [
    PlaylistLayoutComponent,
    MarkdownModule,
    AsyncPipe,
    VideoPlayerComponent,
    PlaylistEditButtonComponent,
  ],
  template: `
    <app-playlist-layout [video]="video()" [currentTime]="currentTime()">
      @if (!!video().meta) {
        <app-playlist-edit-button
          class="block mb-6"
          [filePath]="getVideFilePath(video())"
        >
          <h1 class="mb-0">{{ video().meta?.title }}</h1>
        </app-playlist-edit-button>
      }
      @defer {
        <app-video-player
          [videoId]="video().id"
          [startSeconds]="seek()?.startSeconds ?? 0"
          [endSeconds]="seek()?.endSeconds ?? 0"
          class="block mb-6"
          (currentTime)="currentTime.set($event)"
        ></app-video-player>
        <div
          [innerHTML]="
            (video().meta?.description ?? '' | markdown | async) ||
            video().description
          "
        ></div>
      }
    </app-playlist-layout>
  `,
})
export default class VideoIdPage {
  readonly route = inject(ActivatedRoute);
  readonly getVideFilePath = getVideFilePath;

  readonly currentTime = signal<number>(0);
  readonly video = toSignal(injectLoad<typeof load>(), {
    requireSync: true,
  });
  readonly seek = toSignal(
    this.route.queryParams.pipe(
      map((params) => ({
        startSeconds: parseInt(params['start'] || '0', 10) || 0,
        endSeconds: parseInt(params['end'] || '0', 10) || 0,
      })),
    ),
  );
}
