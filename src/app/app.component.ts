import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { Grid } from 'ng2-qgrid';
import { DataService } from '../data.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [DataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleVisibilityStateComponent implements AfterViewInit {
  static id = 'visibility-model';

  rows$ = this.dataService.getAtoms();
  gridModel = this.qgrid.model();

  constructor(
    private dataService: DataService,
    private qgrid: Grid,
  ) {
  }

  ngAfterViewInit() {
    this.gridModel.visibility({
      toolbar: {
        bottom: false,
        left: false,
        right: false,
        top: false,
      },
    });
  }
}
