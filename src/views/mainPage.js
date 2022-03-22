/* eslint-disable import/no-cycle */
// import { listPosts } from './posts.js';

import { listPosts } from './post.js';

export function main() {
  // Home
  const mainPages = document.createElement('section');
  //mainPages.appendChild(loadNavbar());

  // Contenedor de Home
  const container = document.createElement('section');
  //container.classList.add('container-home');
  container.classList.add('content');

  // -----  Seccion principal de Home (Posts)
  //const sectionPostHome = document.createElement('section');
  //sectionPostHome.classList.add('posts-home');

  const sectionPostHome = document.createElement('div');
  sectionPostHome.classList.add('mainnofixed');
  sectionPostHome.setAttribute('id', 'mainnofixed');

  const formHome = document.createElement('form');
  formHome.classList.add('main');
  formHome.classList.add('mainpost');
  formHome.classList.add('form-home');
  formHome.id = 'formHome';
  formHome.style.marginBottom = '20px';
  formHome.style.paddingBottom = '10px';

  const userImageBox = document.createElement('div');
  userImageBox.classList.add('userimg');
  const userImage = document.createElement('img');
  userImage.src = './image/user/3.png';

  const userName = document.createElement('div');
  userName.classList.add('username');
  const nameText = document.createElement('p');
  nameText.classList.add('name');
  nameText.textContent = 'Nombre';
  nameText.style.top = '15px';


  // TextArea del form
  const boxMessage = document.createElement('p');
  boxMessage.classList.add('quotes');
  const textAreaFormHome = document.createElement('textArea');
  textAreaFormHome.classList.add('description-Posts');
  textAreaFormHome.id = 'mypara';
  //textAreaFormHome.id = 'descriptionPosts';
  textAreaFormHome.name = 'description-posts';
  textAreaFormHome.placeholder = 'Comparte un artículo, foto, video o idea...';

  //const boxMessage = document.createElement('p');
  //boxMessage.classList.add('quotes');
  //const textMessage = document.createElement('textarea');
  //textMessage.setAttribute('id', 'mypara');
  //textMessage.setAttribute('placeholder', 'comparte un artículo, foto, video o idea...');

  const post = document.createElement('div');
  post.classList.add('post');
  const loadImage = document.createElement('img');
  loadImage.setAttribute('id', 'load2');
  loadImage.classList.add('postimg');
  loadImage.src = ' ';

  const postBar = document.createElement('div');
  postBar.classList.add('postbar');

  const chooseImage = document.createElement('input');
  chooseImage.setAttribute('type', 'file');
  chooseImage.setAttribute('accept', 'images/*');
  chooseImage.setAttribute('id', 'chooseimg');
  chooseImage.addEventListener('change', (event) => {
    loadImage.src = URL.createObjectURL(event.target.files[0]);
  });

  const buttonChooseImage = document.createElement('button');
  buttonChooseImage.classList.add('imgbttn');
  buttonChooseImage.setAttribute('type', 'button');
  buttonChooseImage.setAttribute('id', 'imgbttn');
  buttonChooseImage.textContent = 'Imagen';
  const chooseImageIcon = document.createElement('img');
  chooseImageIcon.src = './image/icon/image.png';
  chooseImageIcon.style.width = '25px';

  // Boton del form enviar post
  const btnSendPost = document.createElement('button');
  btnSendPost.type = 'submit';
  btnSendPost.classList.add('postmypost');
  btnSendPost.id = 'postmypost';
  btnSendPost.innerText = 'Enviar';

  //const buttonSendPost = document.createElement('button');
  //buttonSendPost.classList.add('postmypost');
  //buttonSendPost.setAttribute('type', 'button');
  //buttonSendPost.setAttribute('id', 'postmypost');
 // buttonSendPost.textContent = 'Enviar';

  formHome.appendChild(userImageBox);
  userImageBox.appendChild(userImage);
  formHome.appendChild(userName);
  userName.appendChild(nameText);
  formHome.appendChild(boxMessage);
  boxMessage.appendChild(textAreaFormHome);
  formHome.appendChild(post);
  formHome.appendChild(postBar);
  post.appendChild(loadImage);
  postBar.append(chooseImage, buttonChooseImage);
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

  mainPages.appendChild(container);
  return mainPages;
}

/*export function main() {
  // Home user
  const mainPage = document.createElement('main');
  mainPage.classList.add('content');
  const mainNoFixed = document.createElement('div');
  mainNoFixed.classList.add('mainnofixed');
  mainNoFixed.setAttribute('id', 'mainnofixed');
  
  // Escribir un post
  const mainPost = document.createElement('div');
  mainPost.classList.add('main');
  mainPost.classList.add('mainpost');
  mainPost.style.marginBottom = '20px';
  mainPost.style.paddingBottom = '10px';

  const userImageBox = document.createElement('div');
  userImageBox.classList.add('userimg');
  const userImage = document.createElement('img');
  userImage.src = './image/user/3.png';

  const userName = document.createElement('div');
  userName.classList.add('username');
  const nameText = document.createElement('p');
  nameText.classList.add('name');
  nameText.textContent = 'Nombre';
  nameText.style.top = '15px';

  const boxMessage = document.createElement('p');
  boxMessage.classList.add('quotes');
  const textMessage = document.createElement('textarea');
  textMessage.setAttribute('id', 'mypara');
  textMessage.setAttribute('placeholder', 'comparte un artículo, foto, video o idea...');

  const post = document.createElement('div');
  post.classList.add('post');
  const loadImage = document.createElement('img');
  loadImage.setAttribute('id', 'load2');
  loadImage.classList.add('postimg');
  loadImage.src = ' ';

  const postBar = document.createElement('div');
  postBar.classList.add('postbar');

  const chooseImage = document.createElement('input');
  chooseImage.setAttribute('type', 'file');
  chooseImage.setAttribute('accept', 'images/*');
  chooseImage.setAttribute('id', 'chooseimg');
  chooseImage.addEventListener('change', (event) => {
    loadImage.src = URL.createObjectURL(event.target.files[0]);
  });

  const buttonChooseImage = document.createElement('button');
  buttonChooseImage.classList.add('imgbttn');
  buttonChooseImage.setAttribute('type', 'button');
  buttonChooseImage.setAttribute('id', 'imgbttn');
  buttonChooseImage.textContent = 'Imagen';
  const chooseImageIcon = document.createElement('img');
  chooseImageIcon.src = './image/icon/image.png';
  chooseImageIcon.style.width = '25px';

  const buttonSendPost = document.createElement('button');
  buttonSendPost.classList.add('postmypost');
  buttonSendPost.setAttribute('type', 'button');
  buttonSendPost.setAttribute('id', 'postmypost');
  buttonSendPost.textContent = 'Enviar';
  /*buttonSendPost.addEventListener('click', () => {
    mypost();
    alert('Funciona');
  });

  const allPost = document.createElement('div');
  allPost.classList.add('allpost');

  mainPage.append(mainNoFixed);
  mainNoFixed.appendChild(mainPost, allPost);
  

  mainPost.append(userImageBox, userName, boxMessage, post, postBar);

  userImageBox.append(userImage);
  userName.append(nameText);
  boxMessage.append(textMessage);
  post.append(loadImage);
  postBar.append(chooseImage, buttonChooseImage, buttonSendPost);
  buttonChooseImage.appendChild(chooseImageIcon);

  mainNoFixed.appendChild(listPosts(mainPost, buttonSendPost));


  return mainPage;
}*/

