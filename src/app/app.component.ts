import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from '../data.service';
import { PersistenceStorage } from 'ng2-qgrid';

const EXAMPLE_TAGS = ['persistence-on-state-change', 'Grid state is saved on model change'];

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

  rows$ = this.dataService.getAtoms();
  storage = new PersistenceStorage(sessionStorage);

  constructor(private dataService: DataService) {
  }
}
