import { Component, booleanAttribute, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-button',
  standalone: true,
  imports: [],
  template: `
    <button
      class="block w-full p-2 h-10 text-sm text-stone-900 border border-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white whitespace-nowrap rounded-full"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class NavbarButtonComponent {}
