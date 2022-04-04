/*import { initRouter, displayView } from './lib/router.js';

// primero iniciamos el router pasando como selector el division appContainer
initRouter('#appContainer');
// mostrar vista iniciala según el path actual de la página web
displayView(window.location.pathname);*/


/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable import/no-useless-path-segments */
import { activeSession } from './lib/firebase.js';

activeSession();
