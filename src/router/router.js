/* eslint-disable import/no-cycle */
import { welcome } from '../views/welcome.js';
import { signin } from '../views/signin.js';
import { login } from '../views/login.js';
// import { home } from '../views/home.js';
import { homeUser } from '../views/homeUser.js';
// import { waitingRoom } from '../views/waiting-room.js';
import { PostForm } from '../views/Publications/PostForm.js';
import { activeSession } from '../lib/firebase.js';

const routes = {
  '/': welcome,
  '/signin': signin,
  '/login': login,
  // '/home': home,
  '/homeUser': homeUser,
  // '/waitingRoom': waitingRoom,
  '/postForm': PostForm,
};

const rootDiv = document.getElementById('appContainer');

export const navigateTo = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
};

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname]());
  activeSession();
};
