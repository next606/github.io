

  /* accordion */
  
  $(document).ready(function () {
    $(".accordion__item-title").click(function () {
      $(this)
        .toggleClass("show")
        .next(".accordion__text")
        .slideToggle(200);
    });
  });




/* header */
(function(){
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if(window.pageYOffset > 70){
          header.classList.add('header__active');
        }
        else{
          header.classList.remove('header__active');
        }
    };
}());

 /* burger  */

(function(){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav-box')
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-box-active');
    });
    menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('header__nav-box-active');
    });
}());


/* gallery */

  $('.gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
      }
    }
  });



});



