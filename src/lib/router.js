/* eslint-disable no-console */
import welcome from '../views/welcome.js';
import signin from '../views/signin.js';
import login from '../views/login.js';
import home from '../views/home.js';
import homeUser from '../views/homeUser.js';
import { navigateTo } from './navigator.js';
import waitingRoom from '../views/waiting-room.js';
import PostForm from '../views/Publications/PostForm.js';

const routes = {
  '/': welcome,
  '/signin': signin,
  '/login': login,
  '/home': home,
  '/homeUser': homeUser,
  '/waitingRoom': waitingRoom,
  '/postForm': PostForm,
};

let appContainer;

export const displayView = (route) => {
  const view = routes[route];
  if (view === undefined) {
    // console.warn(`No se encontró vista para ruta '${route}', mostrando vista raíz`);
    navigateTo('/');
    return;
  }

  // Actualizar appContainer segun la funcion render implementada en la vista
  if (view.renderElements) {
    appContainer.innerHTML = '';

    const elements = view.renderElements();
    elements.forEach((el) => {
      appContainer.appendChild(el);
    });
  } else if (view.renderElement) {
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
