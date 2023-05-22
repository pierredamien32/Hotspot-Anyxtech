// var swiper = new Swiper(".slide-content", {
//   slidesPerView: 2,
//   spaceBetween: 30,
//   slidesPerGroup: 1,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   // grabCursor: 'true',
//   keyboard: {
//     enabled: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   // breakpoints:{
//   //   0:{
//   //     slidesPerView:1,
//   //   },
//   //   640:{
//   //     slidesPerView:2,
//   //   },
//   // }
// });

document.getElementById('next').onclick = function(){
  const widthItem = document.querySelector('.item').offsetWidth;
  document.getElementById('formList').scrollLeft =+ widthItem;
}

document.getElementById('prev').onclick = function(){
  const widthItem = document.querySelector('.item').offsetWidth;
  document.getElementById('formList').scrollLeft =- widthItem;
}

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// var swiper = new Swiper(".mySwiper", {
//   cssMode: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   mousewheel: true,
//   keyboard: true,
// });