import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// MY CODE BELOW
// loading element container to transition
const loadingElement = document.querySelector('.app-loading');

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // trigger the transition
  .then(() => loadingElement.classList.add('loaded'))
  // remove the loading element after the transition is complete to prevent swallowed clicks
  .then(() => setTimeout(() => loadingElement.remove(), 1000))
  .catch(err => console.error(err));
