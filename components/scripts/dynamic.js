/* Jeremy Calhoun
WEB115-N801 Fall 24 */

function components(component, elementTag) {
    return fetch(component)
        .then((content) => content.text())
        .then((text) => {
        const element = document.querySelector(elementTag);
        const parser = new DOMParser();
        const parsedDoc = parser.parseFromString(text, 'text/html');
        const fragment = document.createDocumentFragment();
        Array.from(parsedDoc.body.childNodes).forEach((child) => {
            fragment.appendChild(child);
        });
        element.appendChild(fragment);
        })
        .catch((error) => console.error(`Error loading ${component}:`, error));
}

function currentpage() {
let active = window.location.pathname;
if (active === '/') {
    active = '/index.html';
}
const navLinks = document.querySelectorAll('.nav-bar li a');
navLinks.forEach((link) => {
    const linkPage = link.pathname;
    if (linkPage === active) {
    link.parentElement.classList.add('currentpage');
    }
});
}

document.addEventListener('DOMContentLoaded', () => {
Promise.all([
    components('components/header.html', 'header'),
    components('components/footer.html', 'footer')
]).then(currentpage);
});