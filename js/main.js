/* header active */
/* let elements = document.getElementsByClassName("header__item");

    for (var i = 0; i < elements.length; i++){
        elements[i].onclick = function () {
            var el = elements[0];
            while(el){                
                el.classList.remove("header__link-active");             
                el = el.nextElementSibling;
            }
            this.classList.add("header__link-active");
        }
    } */

    
    /* header active scroll */
    




    window.addEventListener('scroll', () => {
      let scrollDistance = window.scrollY;
    
      
        document.querySelectorAll('.section').forEach((el, i) => {
          if (el.offsetTop - document.querySelector('.header__item').clientHeight <= scrollDistance) {
            document.querySelectorAll('.header__nav a').forEach((el) => {
              if (el.classList.contains('header__link-active')) {
                el.classList.remove('header__link-active');
              }
            });
    
            document.querySelectorAll('.header__nav li')[i].querySelector('a').classList.add('header__link-active');
          }
        });
        
      
    });



    /* 1 */
    /* window.addEventListener('scroll', () => {
      let scrollDistance = window.scrollY;
    
      if (window.innerWidth > 768) {
        document.querySelectorAll('.section').forEach((el, i) => {
          if (el.offsetTop - document.querySelector('.header__nav').clientHeight <= scrollDistance) {
            document.querySelectorAll('.header__nav a').forEach((el) => {
              if (el.classList.contains('header__link-active')) {
                el.classList.remove('header__link-active');
              }
            });
    
            document.querySelectorAll('.header__nav li')[i].querySelector('a').classList.add('header__link-active');
          }
        });
      }
    }); */
    /* 2 */
   /*  jQuery(function($) {

      const section = $('.section'),
            nav = $('.header__nav'),
            navHeight = nav.outerHeight(); 
      window.addEventListener('orientationchange', function () {
          navHeight = nav.outerHeight();
      }, false);
  
      $(window).on('scroll', function () {
          const position = $(this).scrollTop();
  
          section.each(function () {
              const top = $(this).offset().top - navHeight - 5,
                    bottom = top + $(this).outerHeight();
  
              if (position >= top && position <= bottom) {
                  nav.find('a').removeClass('header__link-active');
                  section.removeClass('header__link-active');
  
                  $(this).addClass('header__link-active');
                  nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('header__link-active');
              }
          });
      });
  
      nav.find('a').on('click', function () {
          const id = $(this).attr('href');
  
          $('html, body').animate({
              scrollTop: $(id).offset().top - navHeight
          }, 500);
  
          return false;
      });
  
  }); */

  /* accordion */
  
  $(document).ready(function () {
    $(".accordion__item-title").click(function () {
      $(this)
        .toggleClass("show")
        .next(".accordion__text")
        .slideToggle(200);
    });
  });



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

/* video */

$('[data-fancybox]').fancybox({
	protect: true
});






/* ----- */

/* $('.card-deck a').fancybox({
    caption : function( instance, item ) {
      return $(this).parent().find('.card-text').html();
    }
  }); */





  /* progect gallery */

$("[data-fancybox]").fancybox({

speed : 330,

loop : true,

});

/* send form */

$(document).ready(function() {

	
	$("form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

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


/* contact form mask */
$('.phone').mask('+7 (000) 000-0000', {placeholder: "Введите номер телефона"});


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



/* var modal = document.getElementById("myModal");


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
 */






