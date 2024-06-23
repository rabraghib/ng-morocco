import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconsModule } from '@ngaox/icons';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [IconsModule, RouterLink],
  templateUrl: './hero.component.html',
})
export class HeroComponent {}
