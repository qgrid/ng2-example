import { AfterViewInit, Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as XLSX from 'xlsx';
import { DataService, Atom } from '../data.service';
import { Grid } from 'ng2-qgrid';

const EXAMPLE_TAGS = ['import-basic', 'Table data can be imported from file'];

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [DataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  static tags = EXAMPLE_TAGS;
  title = EXAMPLE_TAGS[1];

  rows: Observable<Atom[]> = of([]);
  gridModel = this.qgrid.model();

  constructor(private qgrid: Grid) {
  }
  ngAfterViewInit() {
    this.gridModel.plugin({
      imports: {
        'xlsx': XLSX,
      },
    });
  }
}
