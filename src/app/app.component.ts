import { Component, ChangeDetectionStrategy } from '@angular/core';

const EXAMPLE_TAGS = ['column-url-basic', 'Cell value is an url'];

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  private label = 'QGRID';

  static tags = EXAMPLE_TAGS;
  title = EXAMPLE_TAGS[1];

  rows = [
    {
      'valid': 'http://github.com/qgrid/ng2',
      'invalid': 'Lorem ipsum dolor',
      'withLabel': 'http://github.com/qgrid/ng2',
      'null': null,
      'undefined': undefined,
      'empty': '',
      'customTemplate': 'http://github.com/qgrid/ng2',
    },
  ];

  myLabel: (row: any, value?: any) => string | undefined;

  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    this.myLabel = (...args) => {
      const [, value] = args;
      if (args.length > 1) {
        self.label = value;
        return;
      }

      return self.label;
    };
  }
}
