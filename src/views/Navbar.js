/* eslint-disable padded-blocks */
/* eslint-disable eol-last */
/* eslint-disable no-alert */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import { logout, userState } from '../lib/firebase.js';
import { navigateTo } from '../lib/navigator.js';

export const Navbar = () => {
    const user = userState();
    const template = `
    <nav class="wall-container">
        <div id="profile-principal" class="profile-initial">
            <div class="control-principal">
                <a href="#profile-principal" class="open">
                    <span>Abril menu</span>
                </a>
                <a href="#" class="close">
                    <span>Cerrar menu</span>
                </a>
            </div>
            <div class="sidebarleft">
                <img src="./views/image/user/3.png">
                <p class="getemail">${user ? user.email : ''}</p>
                <p id="location">Ubicación</p>
                <a id="viewall" href="#">Ver Perfil</a>
            </div>
        </div>
        <div class="logo-nav">
            <img id='clickLogo'class="logo-nav" src="../image/icon-terranova.png" alt="">
        </div>
        <nav id="navigation" class="icon-bar">
            <div class="control-menu">
                <a href="#navigation" class="open">
                    <span>Abrir menu</span>
                </a>
                <a href="#" class="close">
                    <span>Cerrar menu</span>
                </a>
            </div>
            <div class="btnSignout">
                <ul class="menu-nav">
                    <li ><a id="logout" href=""> <div class="signOff"><img class="icon-nav" src="../image/Signout_black.svg"><p>Cerrar Sesión</p> </div></a></li>
                </ul>
            </div>
        </nav>
    </nav>`;

    const navBar = document.createElement('header');
    navBar.classList.add('header-div');
    navBar.innerHTML = template;
    const logoutSection = navBar.querySelector('#logout');
    logoutSection.addEventListener('click', (e) => {
                e.preventDefault();
                logout();
                navigateTo('/');
                alert('Cierre de sesión exito');
        });

    const clickLogo = navBar.querySelector('#clickLogo');
    clickLogo.addEventListener('click', (event) => {
        event.preventDefault();
        navigateTo('/homeUser');
    });

    return navBar;
};
