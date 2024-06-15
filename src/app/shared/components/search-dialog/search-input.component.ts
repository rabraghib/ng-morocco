import { Component, effect, input, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from '@ngaox/icons';
import { Subscription, distinctUntilChanged, throttleTime } from 'rxjs';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [IconsModule, ReactiveFormsModule],
  template: `
    <header class="relative">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      >
        <ngaox-icon
          name="app:search"
          class="w-4 h-4 text-gray-500 dark:text-gray-400"
        ></ngaox-icon>
      </div>
      <input
        type="search"
        [formControl]="control"
        title="Search Angular In Darija content!"
        placeholder="Search Angular In Darija content..."
        class="block bg-white dark:bg-stone-800 border-none focus:ring-0 w-full p-4 ps-10 text-sm text-gray-900 dark:placeholder-gray-400 dark:text-white"
      />
    </header>
  `,
})
export class SearchInputComponent {
  readonly value = input<string>('');
  readonly delay = input<number>(300);
  readonly query = output<string>();

  readonly subscription = new Subscription();
  readonly control = new FormControl(this.value(), {
    nonNullable: true,
  });

  constructor() {
    effect(() => {
      this.control.setValue(this.value());
    });
  }

  ngOnInit() {
    this.subscription.add(
      this.control.valueChanges
        .pipe(
          throttleTime(this.delay(), undefined, { trailing: true }),
          distinctUntilChanged(),
        )
        .subscribe((query) => {
          this.query.emit(query);
        }),
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
