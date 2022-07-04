import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Command, Grid, GridModel, PaneComponent } from 'ng2-qgrid';
import { Observable } from 'rxjs';
import { DataService, Human } from '../data.service';

const EXAMPLE_TAGS = ['pane-trigger', 'Pane for selected row can be opened by clicking on the triangle button'];

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [DataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  @ViewChild(PaneComponent) pane: PaneComponent;

  static tags = EXAMPLE_TAGS;
  title = EXAMPLE_TAGS[1];


  rows$: Observable<Human[]>;
  gridModel: GridModel;
  selectedRow: Human;

  openPane = new Command({
    execute: () => this.pane.open('right'),
    canExecute: () => !!this.selectedRow,
  });

  constructor(dataService: DataService,
    private qgrid: Grid,
  ) {
    this.rows$ = dataService.getPeople();
    this.gridModel = qgrid.model();
  }

  ngAfterViewInit() {
    this.gridModel.selectionChanged.watch(e => {
      if (e.hasChanges('items')) {
        this.selectedRow = e.state.items[0];
        this.openPane.canExecuteCheck.next();
      }
    });
  }
}
