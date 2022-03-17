export function footer (){

	//Creación de la sección header del muro principal
    const rootDiv = document.getElementById('root');
    const footerPage = document.createElement('footer');

    const footerNav = document.createElement('nav');
    footerNav.classList.add('footer-menu');

    const footerItems = document.createElement('ul');
    footerItems.classList.add('footer-items');

    const homeNav = document.createElement('li');
    const homeNavLink = document.createElement('a');
    homeNavLink.href ='#';
    const homeNavimage = document.createElement('img');
    homeNavimage.src = './image/icon/home.png';
    homeNavimage.addEventListener('mouseover', () =>{
		homeNavimage.src = './image/icon/homeBlue.png';
	});
    homeNavimage.addEventListener('mouseleave', ()=> {
		homeNavimage.src = './image/icon/home.png';
	});

    const searchNav = document.createElement('li');
    const searchNavLink = document.createElement('a');
    searchNavLink.href ='#';
    const searchNavimage = document.createElement('img');
	searchNavimage.src = './image/icon/search.png';
    searchNavimage.addEventListener('mouseover', () =>{
		searchNavimage.src = './image/icon/searchBlue.png';
	});
    searchNavimage.addEventListener('mouseleave', ()=> {
		searchNavimage.src = './image/icon/search.png';
	});

    const notificationsNav = document.createElement('li');
    const notificationsNavLink = document.createElement('a');
    notificationsNavLink.href ='#';
    const notificationsNavimage = document.createElement('img');
	notificationsNavimage.src = './image/icon/notification.png';
    notificationsNavimage.addEventListener('mouseover', () =>{
		notificationsNavimage.src = './image/icon/notificationBlue.png';
	});
    notificationsNavimage.addEventListener('mouseleave', ()=> {
		notificationsNavimage.src = './image/icon/notification.png';
	});

    const messagesNav = document.createElement('li');
    const messagesNavLink = document.createElement('a');
    messagesNavLink.href ='#';
    const messagesNavimage = document.createElement('img');
	messagesNavimage.src = './image/icon/message.png';
    messagesNavimage.addEventListener('mouseover', () =>{
		messagesNavimage.src = './image/icon/messageBlue.png';
	});
    messagesNavimage.addEventListener('mouseleave', ()=> {
		messagesNavimage.src = './image/icon/message.png';
	});

    rootDiv.appendChild(footerPage);
    footerPage.append(footerNav);
    footerNav.append(footerItems);
    footerItems.append(homeNav, searchNav, notificationsNav, messagesNav);
    homeNav.append(homeNavLink);
    homeNavLink.append(homeNavimage);
	searchNav.append(searchNavLink);
    searchNavLink.append(searchNavimage);
	notificationsNav.append(notificationsNavLink);
    notificationsNavLink.append(notificationsNavimage);
	messagesNav.append(messagesNavLink);
    messagesNavLink .append(messagesNavimage);
}
//footer();


