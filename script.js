// scripts.js

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('nav-active');
}

var swiper = new Swiper('.slide-wrapper', {
    
    loop: true,
    grabCursor: true,
    spaceBetween:20,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
 
    //responsive breakponits
   breakpoints:{
    0:{
        slidesPerView: 1
          },
    483:{
        slidesPerView: 2
    },
    670:{
      slidesPerView: 3
  },
  937:{
    slidesPerView: 4
},
   1091:{
    slidesPerView: 5
    },
    
  }
});
var swiper = new Swiper ('.slider-wrapper', {
    
   
    grabCursor: true,
    spaceBetween:30,
   
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 
    //responsive breakponits
   breakpoints:{
    200:{
        slidesPerView: 1
    },
    620:{
        slidesPerView: 2
    },
   
   1024:{
    slidesPerView: 3
    },
    
  }
});

