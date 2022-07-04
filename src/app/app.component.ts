import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { GridComponent } from 'ng2-qgrid';
import { Observable } from 'rxjs';
import { Atom, DataService } from '../data.service';

const EXAMPLE_TAGS = ['validation-basic', 'Cell inputs have validation rules applied'];

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [DataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @ViewChild(GridComponent, { static: true }) myGrid: GridComponent;

  static tags = EXAMPLE_TAGS;
  title = EXAMPLE_TAGS[1];

  rows: Observable<Atom[]>;

  constructor(dataService: DataService) {
    this.rows = dataService.getAtoms();
  }
}
