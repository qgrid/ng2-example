import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewEncapsulation,
  OnDestroy,
} from '@angular/core';
import { DataService, Quote } from '../data.service';
import { BehaviorSubject, of, Subject, timer } from 'rxjs';
import { repeat, switchMap, takeUntil } from 'rxjs/operators';

const EXAMPLE_TAGS = ['live-data-basic', 'Table data updates in real time'];

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [DataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnDestroy {
  static tags = EXAMPLE_TAGS;

  private destroy$: Subject<void> = new Subject();

  title = EXAMPLE_TAGS[1];
  rows$ = new BehaviorSubject<Quote[]>([]);

  constructor(private dataService: DataService, private cd: ChangeDetectorRef) {
    this.dataService
      .getQuotes()
      .subscribe(quotes => {
        this.rows$.next(quotes);

        of([]).pipe(
          takeUntil(this.destroy$),
          switchMap(() => timer(this.randomNumber(100, 5000))),
          repeat(),
        ).subscribe(() => {

          const randomRowNumbers =
            new Set(
              new Array(this.randomNumber(1, 3))
                .fill(0)
                .map(() => this.randomNumber(0, this.rows$.value.length - 1)),
            );

          const newQuotes = this.updateQuotes(randomRowNumbers);
          this.rows$.next(newQuotes);
        });
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  private updateQuotes(rowNumbers: Set<number>) {
    const rows = [...this.rows$.value];

    for (const idx of rowNumbers) {
      const quote = rows[idx];
      const rnd = this.randomNumber(-50000, 50000);
      quote.last += rnd;
      quote.ask += rnd;
      quote.ldn1 = this.randomTime(quote.ldn1);
    }

    return rows;
  }

  private randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private randomTime(time: string): string {
    if (time.indexOf(':') === -1) {
      return time;
    }

    return time
      .split(':')
      .map((part, partNo) => {
        let value = +part;
        if (partNo === 0) {
          value += this.randomNumber(-5, 5);
          if (value > 23 || value < 0) {
            value = Math.sqrt(Math.pow(value % 24, 2));
          }
        } else if (partNo === 1) {
          value += this.randomNumber(-20, 20);
          if (value > 59 || value < 0) {
            value = Math.sqrt(Math.pow(value % 60, 2));
          }
        }

        return value.toString().padStart(2, '0');
      }).join(':');
  }
}
