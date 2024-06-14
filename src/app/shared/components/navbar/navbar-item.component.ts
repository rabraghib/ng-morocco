import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    @if (route()) {
      <a
        routerLinkActive
        #rla="routerLinkActive"
        [routerLink]="route()"
        class="block py-2 px-3 rounded md:p-0 {{
          rla.isActive
            ? 'text-white bg-red-700 md:bg-transparent md:text-red-700 md:dark:text-red-500'
            : 'text-stone-900 hover:bg-stone-100 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-stone-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-stone-700'
        }}"
      >
        {{ label() }}
      </a>
    } @else {
      <a
        class="block py-2 px-3 rounded md:p-0 text-stone-400 dark:text-stone-700"
      >
        {{ label() }}
      </a>
    }
  `,
})
export class NavbarItemComponent {
  readonly label = input.required<string>();
  readonly route = input<string>();
}
