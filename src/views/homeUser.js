/* import { header } from './header.js';
import { main as mainPage } from './mainPage.js';
import { footer } from './footer.js'; */

// const rootDiv = document.getElementById('root');

/* function homeUser() {
  const headerEl = header();
  const mainPageEl = mainPage();
  const footerEl = footer();

  return [headerEl, mainPageEl, footerEl];

}

export default {
  renderElements: () => homeUser(),
}; */

import { Navbar } from './Navbar.js';
import { Publication } from './Publication.js';
import { RendPosts } from './Publications/RendPosts.js';

/* function homeUser() {
  //const home = document.createElement('div');

  const headerEl = Navbar();
  const mainPageEl = Publication();
  const footerEl = RendPosts();

  return [headerEl, mainPageEl, footerEl];
}

export default {
  renderElements: () => homeUser(),
}; */
export const homeUser = () => {
  const home = document.createElement('div');

  home.appendChild(Navbar());

  home.appendChild(Publication());

  home.appendChild(RendPosts());

  return home;
};
export default {
  renderElement: () => homeUser(),
};
