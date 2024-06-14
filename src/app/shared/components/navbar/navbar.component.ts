import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarItemComponent } from './navbar-item.component';
import { ThemeService } from '../../../core/services/theme.service';
import { NavbarButtonComponent } from './navbar-button.component';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { SearchDialogComponent } from '../search-dialog/search-dialog.component';
import { IconsModule } from '@ngaox/icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    DialogModule,
    RouterLink,
    NavbarItemComponent,
    NavbarButtonComponent,
    IconsModule,
  ],
  templateUrl: './navbar.component.html',
  styles: ``,
})
export class NavbarComponent {
  private readonly dialog = inject(Dialog);
  readonly themeService = inject(ThemeService);

  toggleTheme() {
    this.themeService.switchMode();
  }

  openSearchDialog() {
    this.dialog.open(SearchDialogComponent);
  }
}
