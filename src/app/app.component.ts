import { Component, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../data.service';
import { Grid } from 'ng2-qgrid';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [DataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  static id = 'scroll-virtual-infinite';

  rows = this.dataService.getAtoms();
  gridModel = this.qgrid.model();

  constructor(
    private dataService: DataService,
    private qgrid: Grid,
  ) {
  }

  ngAfterViewInit() {
    const ssPipe: typeof this.qgrid.pipe.data = (rows, context, next) => {
      const { skip } = this.gridModel.fetch();
      const { size } = this.gridModel.pagination();

      this.dataService
        .getAtoms()
        .subscribe(atoms => {
          const newPage = atoms.slice(skip, skip + size);
          next(rows.concat(newPage));
        });
    };

    this.gridModel.data({
      pipe: [ssPipe as any].concat(this.qgrid.pipeUnit.view),
    });
  }
}
