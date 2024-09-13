
const navtig = document.querySelector('#nav_btn');
const navmenu = document.querySelector('#nav_menu');

navtig.addEventListener('click', ()=>{
    navmenu.classList.toggle('h-[300px]')
    
});


// swiper 

const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    slidesPerView: 3,
    spaceBetween:20 ,
    breakpoints: {
        320:{
            slidesPerView:1,
        },
        
        960:{
            slidesPerView:2,
        },
        1200:{
            slidesPerView:3,
        },

    },
});


const bullets = document.querySelector('.swiper-pagination-bullet'); 

bullets.style.backgroundColor = '#292f36';



const sr  = ScrollReveal({
    origin:'bottom',
    distance:'60px',
    duration:3000,
    delay:100
})

sr.reveal('.hero__text', {origin:'top'})
sr.reveal('.steps__step', {distance:'100px', interval:100})
sr.reveal('.about__text ', {distance:'100px', interval:100})
sr.reveal('.about__text', {origin:'left'})
sr.reveal('.about__img', {origin:'right', delay:800})

sr.reveal('.testiminial__bg', { delay:800})
sr.reveal('.testiminial__title')
sr.reveal('.testiminial__slider', { delay:1000})

sr.reveal('.brand__img', { delay:600, distance:'100px' , interval:100})
sr.reveal('.work__title')

sr.reveal('.work__subtitle', {delay:800})

sr.reveal('.work__grid', {delay:100})


sr.reveal('.stats')


sr.reveal('.stats__item ', {distance:'100px', interval:100})

sr.reveal('.news__title ')

sr.reveal('.news__subtitle ', {delay:800})

sr.reveal('.news__item ', {distance:'100px', interval:100, delay:1000})


sr.reveal('.contact__contanier')

sr.reveal('.contact__text', {delay:800, })
sr.reveal('.footer__item', {distance:'100px', interval:100, })



sr.reveal('.footer_copyright')
