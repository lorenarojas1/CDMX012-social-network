export function header () {

	//Creación de la sección header del muro principal
    const rootDiv = document.getElementById('root');
    const headerPage = document.createElement('header');
    headerPage.classList.add('headerfixed');
    headerPage.classList.add('header');

	//INFORMACIÓN GENERAL DEL PERFIL DEL USUARIO
    const profileUser = document.createElement('nav');
    profileUser.classList.add('profile-initial');
    profileUser.setAttribute('id', 'profile-principal');

	//Creación de controles para desplegar información del usuario
    const controlPrincipalUser = document.createElement('div');
    controlPrincipalUser.classList.add('control-principal');

    const openMenu = document.createElement('a');
    openMenu.classList.add('open');
    openMenu.href ='#profile-principal';

    const openMenuSpan = document.createElement('span');
    openMenuSpan.textContent = 'Abril menu';

    const closeMenu = document.createElement('a');
    closeMenu.classList.add('close');
    closeMenu.href ='#';

    const closeMenuSpan = document.createElement('span');
    closeMenuSpan.textContent = 'Cerrar menu';

	//Creación del contenedor con información general del perfil del usuario
    const profileGeneral = document.createElement('div');
    profileGeneral.classList.add('sidebarleft');

    const imageUser = document.createElement('img');
    imageUser.src = './image/user/3.png';

	const nameUser = document.createElement('p');
	nameUser.textContent = 'Nombre';
	nameUser.setAttribute('id', 'sidename');

	const locationUser = document.createElement('p');
	locationUser.textContent = 'Ubicación';
	locationUser.setAttribute('id', 'location');

	const profile = document.createElement('a');
    profile.setAttribute('id', 'viewall');
    profile.href ='#';
	profile.textContent = 'Ver Perfil';

	const totalComunity = document.createElement('p');
	totalComunity.textContent = '0';
	totalComunity.setAttribute('id', 'totalcomunity');

	const comunity = document.createElement('p');
	comunity.setAttribute('id', 'comunityname');

	const comunityLink = document.createElement('a');
	comunityLink.href = '#';
	comunityLink.textContent = 'Comunidad';

	const logout = document.createElement('p');
	logout.setAttribute('id', 'logout');

	const logoutLink = document.createElement('a');
	logoutLink.href = '#';
	logoutLink.textContent = 'Cerrar Sesión';

	//Asignación de elementos a contenedores especificos para el header
	rootDiv.appendChild(headerPage);
    headerPage.append(profileUser);
    profileUser.append(controlPrincipalUser);
    controlPrincipalUser.append(openMenu, closeMenu);
    openMenu.append(openMenuSpan);
    closeMenu.append(closeMenuSpan);

	profileUser.append(profileGeneral);
	profileGeneral.append(imageUser, nameUser, locationUser, profile, logout);
	//profileGeneral.append(imageUser, nameUser, locationUser, profile, totalComunity, comunity, logout);
	//comunity.append(comunityLink);
	logout.append(logoutLink);

	//iNSERTAR LOGO DE LA RED SOCIAL TERRANOVA
	const logoPage = document.createElement('a');
	logoPage.classList.add('logo');
	logoPage.href = '#';
	const imagelogo = document.createElement('img');
	imagelogo.classList.add('logoletter')
	imagelogo.src = './image/icon-terranova.png';
	imagelogo.style.width =' 70px';

	headerPage.append(logoPage);
	logoPage.append(imagelogo);
};
//header();

