import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DataService, Human } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [DataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  static id = 'theme-grid-dark';

  rows: Observable<Human[]>;

  constructor(dataService: DataService) {
    this.rows = dataService.getPeople();
  }
}
