import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { ExampleModule } from './example.module';

enableProdMode();

platformBrowserDynamic()
  .bootstrapModule(ExampleModule)
  .then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherise, log the boot error
  })
  .catch(err => console.log(err));
