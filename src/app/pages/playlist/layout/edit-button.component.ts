import { Component, computed, input } from '@angular/core';
import { environment } from '../../../core/environment';

@Component({
  selector: 'app-playlist-edit-button',
  standalone: true,
  template: `
    <div class="flex justify-start items-center">
      <div class="mr-1">
        <ng-content></ng-content>
      </div>
      <a
        target="_blank"
        [href]="editUrl()"
        class="text-red-700 dark:text-red-500"
      >
        edit
      </a>
    </div>
  `,
})
export class PlaylistEditButtonComponent {
  readonly filePath = input.required<string>();
  readonly branch = environment.application.branch || 'main';

  readonly editUrl = computed(() => {
    let filePath = this.filePath();
    if (filePath.startsWith('/')) {
      filePath = filePath.slice(1);
    }
    return `https://github.com/ngMorocco/ngx-darija/edit/${this.branch}/${this.filePath()}`;
  });
}
