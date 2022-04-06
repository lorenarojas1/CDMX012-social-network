import { initRouter, displayView } from './lib/router.js';
import { waitForAuthLoad } from './lib/firebase.js';

waitForAuthLoad().then(() => {
  // primero iniciamos el router pasando como selector el division appContainer
  initRouter('#appContainer');
  // mostrar vista iniciala según el path actual de la página web
  displayView(window.location.pathname);
});
