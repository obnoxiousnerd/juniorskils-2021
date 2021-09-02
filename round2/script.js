const navbarLinks = document.querySelector('nav.navbar ul.links');

document
    .querySelector('nav.navbar button.open-links')
    .addEventListener('click', () => {
        navbarLinks.classList.toggle('open');
    });
