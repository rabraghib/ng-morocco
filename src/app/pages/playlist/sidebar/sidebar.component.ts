import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface SidebarItem {
  title: string;
  route: string;
  subTitle: string;
}

@Component({
  selector: 'app-playlist-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
})
export class PlaylistSidebarComponent {
  readonly items = input.required<SidebarItem[]>();
}
