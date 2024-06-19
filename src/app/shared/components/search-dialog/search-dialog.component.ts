import { Component, inject, signal } from '@angular/core';
import { IconsModule } from '@ngaox/icons';
import { SearchInputComponent } from './search-input.component';
import { SearchHit } from '../../../core/models';
import { Router } from '@angular/router';
import { timeToSeconds } from '../../helpers/time';
import { KeyValuePipe } from '@angular/common';
import { Dialog } from '@angular/cdk/dialog';
import { SearchService } from '../../../core/services/search.service';

@Component({
  selector: 'app-search-dialog',
  standalone: true,
  imports: [KeyValuePipe, IconsModule, SearchInputComponent],
  templateUrl: './search-dialog.component.html',
})
export class SearchDialogComponent {
  readonly router = inject(Router);
  readonly dialog = inject(Dialog);
  readonly searchService = inject(SearchService);

  readonly query = signal('');
  readonly results = signal<Map<string, SearchHit[]>>(
    new Map<string, SearchHit[]>(),
  );

  async onQuery(query: string) {
    if (!query) {
      this.query.set('');
      this.results.set(new Map<string, SearchHit[]>());
      return;
    }
    this.query.set(query);
    const results = await this.searchService.search<SearchHit>(query);
    this.results.set(
      (results?.hits || []).reduce((grouped: Map<string, SearchHit[]>, hit) => {
        const titles = grouped.get(hit.session.title) || [];
        if (!titles.length) {
          grouped.set(hit.session.title, titles);
        }
        titles.push(hit);
        return grouped;
      }, new Map<string, SearchHit[]>()),
    );
  }

  onSearchHit(hit: SearchHit) {
    this.query.set('');
    this.router.navigate([`/playlist/${hit.session.videoId}`], {
      queryParams: {
        start: timeToSeconds(hit.start),
        end: timeToSeconds(hit.end),
        // ts: new Date().getTime(),
      },
    });
    this.dialog.closeAll();
  }
}
