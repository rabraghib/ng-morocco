import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ThemeService } from './core/services/theme.service';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <div class="min-h-screen grid grid-rows-[auto,1fr]">
      <app-navbar></app-navbar>
      <main class="min-h-full">
        <router-outlet></router-outlet>
      </main>
    </div>
    <app-footer></app-footer>
  `,
})
export class AppComponent implements OnInit {
  readonly platform = inject(PLATFORM_ID);
  readonly themeService = inject(ThemeService);

  ngOnInit() {
    if (isPlatformBrowser(this.platform)) {
      this.themeService.init();
      // initFlowbite();
    }
  }
}
