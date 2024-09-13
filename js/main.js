
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
    delay:600
})


sr.reveal('.hero__text', {origin:'top'})





