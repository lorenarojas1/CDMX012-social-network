/* eslint-disable import/no-cycle */
// import { listPosts } from './posts.js';

import { listPosts } from './post.js';

function home() {
  // Home
  const homes = document.createElement('section');
  //homes.appendChild(loadNavbar());

  // Contenedor de Home
  const container = document.createElement('section');
  container.classList.add('container-home');

  // aside izquierdo de Home
  const asideLeftHome = document.createElement('aside');
  asideLeftHome.classList.add('profile-home');
  container.appendChild(asideLeftHome);

  // -----  Seccion principal de Home (Posts)
  const sectionPostHome = document.createElement('section');
  sectionPostHome.classList.add('posts-home');

  // Form de enviar y actualizar post
  const formHome = document.createElement('form');
  formHome.classList.add('form-home');
  formHome.id = 'formHome';

  // TextArea del form
  const textAreaFormHome = document.createElement('textArea');
  textAreaFormHome.classList.add('description-Posts');
  textAreaFormHome.id = 'descriptionPosts';
  textAreaFormHome.name = 'description-posts';
  textAreaFormHome.placeholder = '¿Sobre que quieres hablar?';

  // Boton del form enviar post
  const btnSendPost = document.createElement('button');
  btnSendPost.type = 'submit';
  btnSendPost.classList.add('btn-post');
  btnSendPost.id = 'btnPost';
  btnSendPost.innerText = 'Publicar';
  formHome.appendChild(textAreaFormHome);
  formHome.appendChild(btnSendPost);
  // Agregando el form a la Sección principal
  sectionPostHome.appendChild(formHome);
  sectionPostHome.appendChild(listPosts(formHome, btnSendPost));

  // Seccion del post container (contiene los posts)
  const sectionPostsContainer = document.createElement('section');
  sectionPostsContainer.classList.add('post-container');
  sectionPostsContainer.id = 'postContainer';
  sectionPostHome.appendChild(sectionPostsContainer);
  container.appendChild(sectionPostHome);

  // Aside Derecho del home
  const asideRightHome = document.createElement('aside');
  asideRightHome.classList.add('hash-home');
  container.appendChild(asideRightHome);

  homes.appendChild(container);
  return homes;
}
home();


/* eslint-disable import/no-cycle */
// import { listPosts } from './posts.js';
/* import loadNavbar from './navbar.js';
export default function home() {
  const container = document.createElement('div');
  const containerHome = document.createElement('section');
  containerHome.classList.add('container-home');
  containerHome.innerHTML = `
      <aside class="profile-home"></aside>
      <section class="posts-home">
        <form class="form-home" id="formHome" method="post">
          <textarea name="description-posts" class="description-Posts" id="descriptionPosts"
          cols="4" placeholder="¿Sobre que quieres hablar?"></textarea>
          <button type="submit" class="btn-post" id="btnPost">Publicar</button>
        </form>
        <section class="post-container" id="postContainer">
        </section>
      </section>
      <aside class="hash-home">
      </aside>
  `;
  container.appendChild(loadNavbar());
  container.append(containerHome);
  return container;
} */