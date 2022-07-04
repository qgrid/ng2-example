import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GridModel } from 'ng2-qgrid';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Atom, DataService } from '../data.service';

const EXAMPLE_TAGS = ['data-provider-basic', 'Data provider demonstration. All actions are performed on server side'];

class FakeServer {
  constructor(
		private dataService: DataService,
  ) { }

  getPage(pageNumber: number, pageSize: number): Observable<Atom[]> {
    return this.dataService.getAtoms()
      .pipe(map(atoms => atoms.splice(pageNumber * pageSize, pageSize)));
  }

  getTotal(): Observable<number> {
    return this.dataService.getAtoms()
      .pipe(map(atoms => atoms.length));
  }
}

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [DataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  static tags = EXAMPLE_TAGS;
  title = EXAMPLE_TAGS[1];

  page$: Observable<Atom[]>;

  constructor(
		private dataService: DataService,
  ) { }

  onRequestRows(gridModel: GridModel): void {
    const server = new FakeServer(this.dataService);
    const pager = gridModel.pagination();

    this.page$ = server.getTotal()
      .pipe(
        tap(total => gridModel.pagination({ count: total })),
        switchMap(() => server.getPage(pager.current, pager.size)),
      );
  }
}
