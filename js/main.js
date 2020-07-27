/* header active */
let elements = document.getElementsByClassName("header__item");

    for (var i = 0; i < elements.length; i++){
        elements[i].onclick = function () {
            var el = elements[0];
            while(el){                
                el.classList.remove("header__link-active");             
                el = el.nextElementSibling;
            }
            this.classList.add("header__link-active");
        }
    }

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
    const menuLinks = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-box-active');
    });
    menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('header__nav-box-active');
    });
    if (window.innerWidth <= 1000) {
      for (let i = 0; i < menuLinks.length; i += 1) {
          menuLinks[i].addEventListener('click', () => {
              menu.classList.remove('header__nav-box-active');
          });
      }
  }
}());





/* gallery */


/* $('.project__gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1] 
  },
  image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    titleSrc: function(item) {
      return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
    }
  }
}); */


// Scroll to anchors main
(function () {

  const smoothScroll = function (targetEl, duration) {
      const headerElHeight =  document.querySelector('.header').clientHeight;
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;
  
      const ease = function(t,b,c,d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      const animation = function(currentTime){
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, targetPosition, duration);
          window.scrollTo(0,run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);

  };

  const scrollTo = function () {
      const links = document.querySelectorAll('.js-scroll');
      links.forEach(each => {
          each.addEventListener('click', function () {
              const currentTarget = this.getAttribute('href');
              smoothScroll(currentTarget, 1000);
          });
      });
  };
  scrollTo();
}());

/* Scroll to anchors small */

(function () {

  const smoothScroll = function (targetEl, duration) {
      const headerElHeight =  document.querySelector('.contact').clientHeight;
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;
  
      const ease = function(t,b,c,d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      const animation = function(currentTime){
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, targetPosition, duration);
          window.scrollTo(0,run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);

  };

  const scrollTo = function () {
      const links = document.querySelectorAll('.js-scroll2');
      links.forEach(each => {
          each.addEventListener('click', function () {
              const currentTarget = this.getAttribute('href');
              smoothScroll(currentTarget, 1000);
          });
      });
  };
  scrollTo();
}());

/* video */

$('.card-deck a').fancybox({
    caption : function( instance, item ) {
      return $(this).parent().find('.card-text').html();
    }
  });





  /* progect gallery */

$("[data-fancybox]").fancybox({
// Скорость анимации
speed : 330,
// Бесконечная прокрутка галереи
loop : true,

});


/* contact form */




$(document).ready(function() {
	$('.submit').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

});






/* photoswipe */
/* (function($) {
  var $pswp = $('.pswp')[0];
  var image = [];

  $('.picture').each( function() {
      var $pic     = $(this),
          getItems = function() {
              var items = [];
              $pic.find('a').each(function() {
                  var $href   = $(this).attr('href'),
                      $size   = $(this).data('size').split('x'),
                      $width  = $size[0],
                      $height = $size[1];

                  var item = {
                      src : $href,
                      w   : $width,
                      h   : $height
                  }

                  items.push(item);
              });
              return items;
          }

      var items = getItems();

      $.each(items, function(index, value) {
          image[index]     = new Image();
          image[index].src = value['src'];
      });

      $pic.on('click', 'figure', function(event) {
          event.preventDefault();
          
          var $index = $(this).index();
          var options = {
              index: $index,
              bgOpacity: 0.7,
              showHideOpacity: true
          }

          var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
          lightBox.init();
      });
  });
})(jQuery); */

