/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import { getUser } from '../lib/firebase.js';
import { navigateTo } from '../router/router.js';

export const Publication = () => {
    const user = getUser();
    const view = `
    <div class="addPublication">
        <div class="information-user">
            <img class="userimg" src="./src/image/user/3.png">
            <p class= "getemail">${user ? user.email : ''}</p>
        </div>
    <div class= "container-addpost">
    <div class= "text-publication">
        <a class="textaddpost" href="/postForm" id="addpublications"><img class="icon-plus" src="./src/image/plusazul.png">Agregar</a>
    </div>
    </div>
    </div>`;

    const publicationsDiv = document.createElement('div');
    publicationsDiv.classList.add('Poster');
    publicationsDiv.innerHTML = view;

    const btnAddPost = publicationsDiv.querySelector('#addpublications');
    btnAddPost.addEventListener('click', (event) => {
        event.preventDefault();
        navigateTo('/postForm');
    });
    return publicationsDiv;
 };


