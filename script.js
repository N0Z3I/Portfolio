let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
})

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.heros-img',{delay:450, origin:'top'});
sr.reveal('nav',{delay:450, origin:'top'});
sr.reveal('.navlists',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});
sr.reveal('.title',{delay:200, origin:'top'});
sr.reveal('.section__text__p1',{delay:200, origin:'top'});
sr.reveal('.contact-info-upper-container',{delay:450, origin:'top'});
sr.reveal('.experience-details-container',{delay:450, origin:'top'});