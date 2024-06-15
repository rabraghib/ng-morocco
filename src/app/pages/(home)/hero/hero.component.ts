import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { IconsModule } from '@ngaox/icons';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [IconsModule, NgOptimizedImage],
  templateUrl: './hero.component.html',
})
export class HeroComponent {}
