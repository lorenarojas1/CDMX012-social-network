import welcome from './views/welcome.js';
import signin from './views/signin.js';
import login from './views/login.js';

const routes = {
  '/': welcome,
  '/signin': signin,
  '/login': login,

};

let appContainer;

export const displayView = (route) => {
  const view = routes[route];
  appContainer.innerHTML = view.render();
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
