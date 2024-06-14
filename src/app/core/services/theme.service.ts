import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, computed, signal } from '@angular/core';

export type AppThemeMode = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  readonly themeMode = signal<AppThemeMode>('light');
  readonly isDarkMode = computed(() => this.themeMode() === 'dark');

  constructor(@Inject(DOCUMENT) private document: Document) {}

  init() {
    const doesPreferDark =
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    this.switchMode(doesPreferDark ? 'dark' : 'light');
  }

  switchMode(mode?: AppThemeMode) {
    const newMode = mode ?? this.getOppositeMode(this.themeMode());
    this.themeMode.set(newMode);

    localStorage.setItem('color-theme', newMode);
    this.document.documentElement.classList.add(newMode);
    this.document.documentElement.classList.remove(
      this.getOppositeMode(newMode),
    );
  }

  getOppositeMode(mode: AppThemeMode) {
    return mode === 'dark' ? 'light' : 'dark';
  }
}
