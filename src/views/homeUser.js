import { header } from './header.js';
import { main as mainPage } from './mainPage.js';
import { footer } from './footer.js';

// const rootDiv = document.getElementById('root');

function homeUser() {
  const headerEl = header();
  const mainPageEl = mainPage();
  const footerEl = footer();

  return [headerEl, mainPageEl, footerEl];

  // const wrapperEl = document.createElement('div');
  // wrapperEl.appendChild(headerEl);
  // wrapperEl.appendChild(mainEl);
  // wrapperEl.appendChild(footerEl);
  // return wrapperEl;
}

export default {
  renderElements: () => homeUser(),
};
