import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../data.service';
import { GridModel, Grid } from 'ng2-qgrid';

const EXAMPLE_TAGS = ['index-column-hybrid', 'Columns are ordered (typescript and html)'];

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [DataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  static tags = EXAMPLE_TAGS;
  title = EXAMPLE_TAGS[1];

  gridModel: GridModel;

  constructor(dataService: DataService, qgrid: Grid) {
    this.gridModel = qgrid.model();

    dataService
      .getAtoms()
      .subscribe(rows => {
        this.gridModel.data({
          rows,
          columns: [
            {
              key: 'name',
              title: '[js 3]Name',
              index: 3,
            },
            {
              key: 'source',
              title: '[js 2]Source',
              index: 2,
            },
            {
              key: 'melt',
              title: '[js 8]Melt',
              index: 8,
            },
            {
              key: 'mass',
              title: '[js no index]Mass',
            },
            {
              key: 'boil',
              title: '[js 0]Boil',
              index: 0,
            },
          ],
        });
      });
  }
}
