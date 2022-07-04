import { Component, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService, Atom } from '../data.service';
import { Observable } from 'rxjs';
import { Grid, GridModel } from 'ng2-qgrid';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [DataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  static id = 'look-atoms-id';

  rows: Observable<Atom[]>;
  gridModel: GridModel;

  constructor(dataService: DataService,
		private qgrid: Grid,
  ) {
    this.gridModel = qgrid.model();
    this.rows = dataService.getAtoms();
  }

  ngAfterViewInit() {
    this.gridModel.dataChanged.watch((e, off) => {
      if (e.hasChanges('columns')) {
        this.gridModel.sort({
          by: ['number'],
        });

        off();
      }
    });
  }
}
