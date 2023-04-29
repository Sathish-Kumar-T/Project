// ===============toggle icon navibar=============
let menuIcon =document.querySelector('#menu-icon');
let navibar = document.querySelector('.navibar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navibar.classList.toggle('active')
}
// ===============scroll -section=============
let section = document.querySelectorAll('section');
let naviLinks = document.querySelectorAll('header navibar a')

window.onscroll=() =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height){
            naviLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header navibar a[href*='+ id + ']').classList.add('active');
            });
        };
    });
    // ===============sticky-navibar=============
    let header=document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

  // ===============remove toggle icon and  navibar when click navibar (scroll)=============  

  menuIcon.classList.remove('bx-x');
  navibar.classList.remove('active')
};

// ===================scroll-revel===================
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration: 2000,
    delay: 100 
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .skill-container , .projects-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right'});


// ===============typed-js==================

const typed = new Typed ('.multiple-text',{
    strings:['Frontend Developer','Web Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true 
})