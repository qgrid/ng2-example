import { AfterViewInit, Component, ChangeDetectionStrategy } from '@angular/core';
import { Grid } from 'ng2-qgrid';
import { DataService } from '../data.service';
import * as fileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXAMPLE_TAGS = ['export-basic', 'Table data can be exported in different formats, using UI buttons'];

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

  rows = this.dataService.getAtoms();
  gridModel = this.qgrid.model();

  constructor(
    private dataService: DataService,
		private qgrid: Grid,
  ) {
  }

  ngAfterViewInit() {
    this.gridModel.plugin({
      imports: {
        'fileSaver': fileSaver,
        'xlsx': XLSX,
      },
    });
  }
}
