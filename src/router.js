import welcome from './views/welcome.js';
import signin from './views/signin.js';
import login from './views/login.js';
import playing from './views/playing.js'
import { navigateTo } from './lib/navigator.js';

const routes = {
  '/': welcome,
  '/signin': signin,
  '/login': login,
  '/playing': playing,
};

let appContainer;

export const displayView = (route) => {
  const view = routes[route];
  if (view === undefined) {
    console.warn(`No se encontró vista para ruta '${route}', mostrando vista raíz`);
    navigateTo('/');
    return;
  }

  if (view.renderElement) {
    const el = view.renderElement();
    appContainer.innerHTML = '';
    appContainer.appendChild(el);
  } else {
    appContainer.innerHTML = view.render();
  }
  if (view.afterRender) {
    view.afterRender();
  }
};

export const initRouter = (appSelector) => {
  appContainer = document.querySelector(appSelector);

  window.onpopstate = () => {
    displayView(window.location.pathname);
  };
};
