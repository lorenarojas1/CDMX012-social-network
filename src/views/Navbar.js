/* eslint-disable padded-blocks */
/* eslint-disable eol-last */
/* eslint-disable no-alert */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
 import { logout } from '../lib/firebase.js';
import { navigateTo } from '../lib/navigator.js';

export const Navbar = () => {

    const template = `
    <nav class="wall-container">
    <div class="logo-nav">
        <img id='clickLogo'class="logo-nav" src="./src/image/icon-terranova.png" alt="">
    </div>
    </nav>
    <div class="menu-nav">
        <ul>
        <li ><a id="logout" href=""> <div class="signOff"> <img class="icon-nav" src="./src/image/iconPost/signout.svg"> <p>Cerrar Sesión</p> </div> </a></li> 
            <!-- <li><a href="#" id="profilePerfil"><img class= "icon-nav" src="./src/img/iconsusuario.png">Profile</a></li>-->
        </ul>
    </div>
    
`;
    const navBar = document.createElement('header');
    navBar.classList.add('header-div');
    navBar.innerHTML = template;
    const logoutSection = navBar.querySelector('#logout');
    logoutSection.addEventListener('click', (e) => {
                e.preventDefault();
                logout();
                navigateTo('/');
        });

    const clickLogo = navBar.querySelector('#clickLogo');
    clickLogo.addEventListener('click', (event) => {
        event.preventDefault();
        navigateTo('/homeUser');
    });

    return navBar;
};
