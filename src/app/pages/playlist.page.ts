import { toSignal } from '@angular/core/rxjs-interop';
import { Component, computed, inject } from '@angular/core';
import {
  PlaylistSidebarComponent,
  SidebarItem,
} from './playlist/sidebar/sidebar.component';
import { injectLoad } from '@analogjs/router';
import { RouterOutlet } from '@angular/router';
import { load } from './playlist.server';
import { formatDate } from '@angular/common';

@Component({
  standalone: true,
  imports: [PlaylistSidebarComponent, RouterOutlet],
  template: `
    <section
      class="max-w-screen-xl relative mx-auto grid grid-cols-[auto,1fr] gap-8 px-4"
    >
      <aside class="h-fit pt-4 pb-10 sticky top-[136px] md:top-[72px]">
        <app-playlist-sidebar [items]="sidebarItems()"></app-playlist-sidebar>
      </aside>
      <main class="h-fit pt-6 pb-10 w-full sticky top-[136px] md:top-[72px]">
        <router-outlet></router-outlet>
      </main>
    </section>
  `,
})
export default class PlaylistPage {
  readonly playlist = toSignal(injectLoad<typeof load>(), {
    requireSync: true,
  });

  readonly sidebarItems = computed<SidebarItem[]>(() => {
    const items: SidebarItem[] = [
      {
        title: 'Introdution',
        route: '/playlist/contribute',
        subTitle: 'How to contribute?',
      },
    ];
    for (const videoItem of this.playlist()) {
      const title = videoItem?.meta?.title || videoItem.title;
      if (!title) continue;
      const formattedDate = formatDate(
        videoItem.publishedAt,
        'mediumDate',
        'en-US',
      );
      items.push({
        title: title,
        route: `/playlist/${videoItem.id}`,
        subTitle: `${formattedDate}`,
      });
    }
    return items;
  });
}
