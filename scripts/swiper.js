const swiperAnimation = new SwiperAnimation();
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,

    on: {
      init: function(){
        swiperAnimation.init(this).animate();
      },
      slideChange: function() {
        swiperAnimation.init(this).animate();
      }
    },

    autoplay: true,

    preloadImages: true,
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });