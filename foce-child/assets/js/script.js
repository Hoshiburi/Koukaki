console.log('Script JavaScript chargé.');

document.addEventListener('DOMContentLoaded', function () {

//PARALLAX LOGO/VIDEO AU SCROLL 
// var video = document.querySelector("#parallax-video");
// var logo = document.querySelector("#parallax-logo");

// window.addEventListener("scroll", function () {
//     var scrollValue = window.scrollY;
    
//       video.style.transform = `translateY(${scrollValue * -0.5}px)`;

//     // Déplacer le logo en fonction du scroll, seulement après que la vidéo a atteint -230px
//     if (scrollValue > 230) {
//         logo.style.transform = `translateY(${(scrollValue - 230) * -0.3}px)`;
//     } else {
//         logo.style.transform = 'translateY(0px)';
//     }
// });

window.addEventListener('scroll', function () {
  var scrollTop = window.scrollY;
  var baseMovement = scrollTop * 0.5;
  var logo = document.getElementById('parallax-logo');
  // position top maximale en fonction de la largeur de la fenêtre
  var maxWidthPosition = window.innerWidth <= 767 ? 110 : 240;
  // position où le logo atteint maxWidthPosition top
  var maxScrollForLogo = maxWidthPosition / 0.5;
  var logoPosition;

  if (scrollTop <= maxScrollForLogo) {
    logoPosition = baseMovement;
  } else {
    // Si le scroll dépasse maxScrollForLogo, inverse le mouvement du logo
    logoPosition = maxWidthPosition - (scrollTop - maxScrollForLogo) * 0.3;
  }
  // Appliquer la position calculée au logo
  logo.style.top = logoPosition + 'px';
});
  

// Initialisation de SwiperJS
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  initialSlide: 1,
  coverflowEffect: {
    rotate: 80,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});


// CLOUDS
var root = document.documentElement;
window.addEventListener("scroll", () => {
  var place = document.getElementById('place');
  var posX = Math.round(0 - (window.scrollY - place.offsetTop - 300));
  if (posX <= 0 && posX > -400) {
    root.style.setProperty("--posX", posX + "px");
  }
});


// FLOWERS
let scrollTimeout;
window.addEventListener("scroll", () => {
  root.style.setProperty("--rotate-duration", "5s");
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    root.style.setProperty("--rotate-duration", "15s");
  }, 2000);
});


// HEADER MENU
var fullscreenNav = document.querySelector('.fullscreen-nav');
var menuToggle = document.querySelector('.menu-toggle');
var siteHeader = document.querySelector('.site-header');
// Clic dans le bouton de menu
menuToggle.addEventListener('click', function (event) {
  if (fullscreenNav.style.display === "none" || fullscreenNav.style.display === "") {
    fullscreenNav.style.display = "flex";
    menuToggle.classList.remove('burger-menu');
    menuToggle.classList.add('cross-menu');
    // Ajout du style fixed à l'en-tête
    siteHeader.style.position = 'fixed';
    siteHeader.style.width = '100%';
    siteHeader.style.maxWidth = '1440px';
  } else {
    fullscreenNav.style.display = "none";
    menuToggle.classList.remove('cross-menu');
    menuToggle.classList.add('burger-menu');
    // Rétablissement du style sticky de l'en-tête
    siteHeader.style.position = 'sticky';
    // Réinitialiser width et maxWidth si nécessaire
  }
  event.stopPropagation();
});
// Clic en dehors du menu
document.addEventListener('click', function (event) {
  if (!fullscreenNav.contains(event.target) && !menuToggle.contains(event.target)) {
    fullscreenNav.style.display = "none";
    menuToggle.classList.remove('cross-menu');
    menuToggle.classList.add('burger-menu');
    siteHeader.style.position = 'sticky';
  }
});
// Clic dans l'ul du menu
var navItems = document.querySelectorAll('.fullscreen-nav ul');
navItems.forEach(function (navItem) {
  navItem.addEventListener('click', function () {
    fullscreenNav.style.display = "none";
    menuToggle.classList.remove('cross-menu');
    menuToggle.classList.add('burger-menu');
    siteHeader.style.position = 'sticky';
  });
});
// Arrêter la propagation de l'événement lors du clic sur le menu lui-même
fullscreenNav.addEventListener('click', function (event) {
  event.stopPropagation();
});

});


// TITLES
const T1 = document.querySelector('#studio h2 span');
const T2 = document.querySelector('#story h2 span');
const T3 = document.querySelector('#characters h3 span');
const T4 = document.querySelector('#place h3 span');
const T5 = document.querySelector('#nomination h3 span')
// Création des observateurs
const observer1 = new IntersectionObserver(handleIntersection(T1));
const observer2 = new IntersectionObserver(handleIntersection(T2));
const observer3 = new IntersectionObserver(handleIntersection(T3));
const observer4 = new IntersectionObserver(handleIntersection(T4));
const observer5 = new IntersectionObserver(handleIntersection(T5));
// Fonction pour gérer les intersections
function handleIntersection(el) {
  return entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        el.classList.add('fade-in-class');
        return;
      }
      el.classList.remove('fade-in-class');
    });
  };
}
// Observation
observer1.observe(document.getElementById('studio'));
observer2.observe(document.getElementById('story'));
observer3.observe(document.getElementById('characters'));
observer4.observe(document.getElementById('place'));
observer5.observe(document.getElementById('nomination'));