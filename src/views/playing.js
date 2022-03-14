export default {
    renderElement: () => {
        const h1 = document.createElement('h1');
        h1.innerHTML = 'Hola, soy una página de pruebas y diversion';
        h1.addEventListener('click', () => console.log('Haz hecho click sobre el header'));
        return h1;
    },
}