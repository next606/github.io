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






/* header fixed */
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


/* slider */
/* $('.popular__slider').slick({

  arrows: true,

  

infinite: true,
autoplay: true,
autoplaySpeed: 2500,
speed: 600,

slidesToShow: 3,

prevArrow:'<div class="arrowleft"><img src="/images/svg/arrowleft.svg" alt=""></div>',

nextArrow:'<div class="arrowright"><img src="/images/svg/arrowright.svg" alt=""></div>',

responsive: [

  {

    breakpoint: 1000,

    settings: {

      slidesToShow: 2,

      slidesToScroll: 1,

      infinite: true,
      arrows: true,
    }

  },


]

}); */



$('.popular__slider').slick({
  arrows: true,
  infinite: true,
speed: 600,
slidesToShow: 3,
/* autoplay: true,
autoplaySpeed: 2500, */


prevArrow:'<div class="arrowleft"><img src="/images/svg/arrowleft.svg" alt=""></div>',
nextArrow:'<div class="arrowright"><img src="/images/svg/arrowright.svg" alt=""></div>',

responsive: [

  {

    breakpoint: 1101,

    settings: {

      slidesToShow: 2,

      slidesToScroll: 1,

      infinite: true,
      arrows: true,
    }

  },
  {
    breakpoint: 616,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },

]



});



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




 

    
  
/* send form 1 */
/* $("form").submit(function() {

  var th = $(this);

  $.ajax({
  type: "POST",
  url: "mail.php",
  data: th.serialize()
  }).done(function((result) {
    
    
    
    $('#results,#errors').remove();
    
    $('#contactWrapper').append('<p id="results">' + result + '</p>');
    
    $('#loading').fadeOut(500, function() {
    
    $(this).remove();
    
    
    
    });
    
    
    
    if (  ) {
    
    window.location='https://google.com/'
    
    }
    
    
    
    }
  }); */
/* send form 0 */
/* $(document).ready(function() {




  $("form").submit(function() {
  
  var th = $(this);
  
  $.ajax({
  
  type: "POST",
  
  url: "mail.php",
  
  data: th.serialize()
  
  }).done(function() { */
  
  // alert("Thank you!");
  
  
  
  /* $('.submit').magnificPopup({
  
  type: 'inline',
  
  
  
  fixedContentPos: false,
  
  fixedBgPos: true,
  
  
  
  overflowY: 'auto',
  
  
  
  closeBtnInside: true,
  
  preloader: false,
  
  
  
  midClick: true,
  
  removalDelay: 300,
  
  mainClass: 'my-mfp-zoom-in'
  
  }).magnificPopup('open');
    
  setTimeout(function() {
    
  th.trigger("reset");
  
  }, 1000);
  
  });
  
  return false;
  
  });
  
    
  });
 */


/* contact form mask */
$('.phone').mask('+7 (000) 000-0000', {placeholder: "Номер телефона"});
$('.crazy_cep').mask('00000-000', { onKeyPress: function (cep) {
  var masks = ['00000-000', '0-00-00-00'];
  mask = (cep.length>7) ? masks[1] : masks[0];
  $('.crazy_cep').mask(mask, this);
}});
$('.cpf').mask('000.000.000-00', {reverse: true});

var SaoPauloCelphoneMask = function(phone, e, currentField, options){
  return phone.match(/^(\(?11\)? ?9(5[0-9]|6[0-9]|7[01234569]|8[0-9]|9[0-9])[0-9]{1})/g) ?
    '(00) 00000-0000' : '(00) 0000-0000';
};
$(".sp_celphones").mask('(00) 00009-0000', {placeholder: "( __ ) _____ - ____"});

$(".bt-mask-it").click(function(){
  $(".mask-on-div").mask("000.000.000-00");
  $(".mask-on-div").fadeOut(500).fadeIn(500)
});

/* footer policy */

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 










