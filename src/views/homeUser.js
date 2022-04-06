import { Navbar } from './Navbar.js';
import { Publication } from './Publication.js';
import { RendPosts } from './Publications/RendPosts.js';

const homeUser = () => {
  const home = document.createElement('div');
  home.classList.add('wall-container');

  home.appendChild(Navbar());

  home.appendChild(Publication());

  home.appendChild(RendPosts());

  return home;
};
export default {
  renderElement: () => homeUser(),
};
