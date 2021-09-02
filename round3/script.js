const navbar = document.querySelector('nav.navbar');
const openMenuButton = navbar.querySelector('button.open-menu');
const navbarMenu = navbar.querySelector('ul.links');

const navbarMenuHelpers = {
  animation: (animationDuratrion) =>
    `navbar-toggle ${animationDuratrion}ms cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards`,
  animationDuratrion: 300,
  animate(menu, reverse) {
    let styleAnimation = this.animation(this.animationDuratrion);
    if (reverse) {
      styleAnimation += ' reverse';
    }
    menu.style.animation = styleAnimation;
    setTimeout(
      () => menu.style.removeProperty('animation'),
      this.animationDuratrion
    );
  },
  open(menu) {
    this.animate(menu);
    menu.classList.add('open');
  },
  close(menu) {
    this.animate(menu, true);
    setTimeout(() => menu.classList.remove('open'), this.animationDuratrion);
  },
  isOpen(menu) {
    return menu.classList.contains('open');
  },
};

const hamburgerHelpers = {
  animationDuratrion: 200,
  animations: {
    upper: (animationDuratrion) =>
      `rotate-bread-upper ${animationDuratrion}ms ease forwards`,
    lower: (animationDuratrion) =>
      `rotate-bread-lower ${animationDuratrion}ms ease forwards`,
  },
  animate(hamburger, reverse) {
    const spans = hamburger.querySelectorAll('span');
    let upperAnimation = this.animations.upper(this.animationDuratrion);
    let lowerAnimation = this.animations.lower(this.animationDuratrion);
    if (reverse) {
      lowerAnimation += ' reverse';
      upperAnimation += ' reverse';
    }
    spans[0].style.animation = upperAnimation;
    if (spans[1].style.opacity === 0) spans[1].style.opacity = 1;
    else spans[1].style.opacity = 0;
    spans[2].style.animation = lowerAnimation;

    setTimeout(() => {
      spans[0].style.removeProperty('animation');
      spans[1].style.removeProperty('opacity');
      spans[2].style.removeProperty('animation');
    }, this.animationDuratrion);
  },
  open(hamburger) {
    this.animate(hamburger);
    setTimeout(() => hamburger.classList.add('open'), this.animationDuratrion);
  },
  close(hamburger) {
    this.animate(hamburger, true);
    setTimeout(
      () => hamburger.classList.remove('open'),
      this.animationDuratrion
    );
  },
};

openMenuButton.addEventListener('click', () => {
  const hamburger = openMenuButton.querySelector('.hamburger');
  navbarMenuHelpers.isOpen(navbarMenu)
    ? (navbarMenuHelpers.close(navbarMenu), hamburgerHelpers.close(hamburger))
    : (navbarMenuHelpers.open(navbarMenu), hamburgerHelpers.open(hamburger));
});

const banner = document.querySelector('.banner');
banner.querySelector('.image').style.display = 'block';
setInterval(() => {
  const images = Array.from(banner.querySelectorAll('.image'));
  const activeImageIndex = images.findIndex((x) => x.style.display === 'block');
  const nextActiveImage =
    activeImageIndex + 1 < images.length
      ? images[activeImageIndex + 1]
      : images[0];
  images[activeImageIndex].style.display = 'none';
  nextActiveImage.style.display = 'block';
}, 4000);

setInterval(() => {
  const counter = document.querySelector('section#counter .counter');
  const eventDate = new Date('2021-08-28');
  // Calculate hours minutes and seconds between the dates
  const hours = Math.floor(
    (eventDate.getTime() - new Date().getTime()) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    ((eventDate.getTime() - new Date().getTime()) / (1000 * 60)) % 60
  );
  const seconds = Math.floor(
    ((eventDate.getTime() - new Date().getTime()) / 1000) % 60
  );
  counter.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
}, 500);
