let menuBtn = document.querySelector('#menu-btn');
let menubar = document.querySelector('.navq');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    menubar.classList.toggle('active')
}
window.onscroll = () => {
    menuBtn.classList.remove('bx-x');
    menubar.classList.remove('active')
}
ScrollReveal({
    reset: true,
    distance: '100px',
    duratiobn: 2000,
    delay:200
});
 
ScrollReveal().reveal('.home-bio h1, .about-resume',{origin: 'right'});
ScrollReveal().reveal('.home-bio p',{origin: 'right'});
ScrollReveal().reveal('.home-bio ,heading',{origin: 'top'});
ScrollReveal().reveal('.profile, .about-items, .skills-items, .projects-items, .form' ,{origin: 'bottom'});


const animText = new Typed ('.animated-text',{
    strings: ['Front-end Developer', 'Coder', 'Gamer', 'Student'],
    backSpeed:100,
    typeSpeed:100,
    backDelay:600,
    loop: true,
});