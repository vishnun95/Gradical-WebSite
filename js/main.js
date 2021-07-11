var scrollCurrentPoistion = 0;
var lastScrollTop = 0;
var swiper;

// function scrollCheck(element) {
//   $(window).scroll(function () {
//     var st = $(this).scrollTop();
//     var top_of_element = $(element).offset().top;
//     var bottom_of_element = $(element).offset().top + $(element).outerHeight();
//     var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
//     var top_of_screen = $(window).scrollTop();
//     if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
//       check(element);
//     } else {
//       unCheck(element);
//     }
//     // if (element === '#swiper') {
//     //   if (st > lastScrollTop) {
//     //     console.log(swiper)
//     //     swiper.mousewheel.enableMousewheelControl();  
//     //     swiper.update();
//     //   } else {
//     //     console.log('dont focus')
//     //     swiper.mousewheel.disableMousewheelControl();  
//     //     swiper.update();
//     //   }
//     //   lastScrollTop = st;
//     // }
//   });
// }

function check(element) {
  switch (element) {
    case '.slideUp':
      $(".slideUp").addClass("active");
      break;
    case '#description1':
      $("#description1").addClass("active2");
      $('.body').removeClass('invertColor');
      break;
    case '#description2':
      $("#description2").addClass("active2");
      break;
    case '#line1':
      $("#line1").addClass("activeWidth");
      break;
    case '#button1':
      $("#button1").addClass("scaleUp");
      break;
    case '#header2':
      $("#header2").addClass("active");
      break;
    case '#header3':
      $("#header3").addClass("active");
      $('.body').addClass('invertColor');
      break;
    case '#header4':
      $("#grid1").addClass("active2");
      $("#grid2").addClass("active3");
      $("#grid3").addClass("active2");
      $("#header4").addClass("active");
      $("#line3").addClass("activeWidth2");
      $('.desClass').addClass('active2');
      break;
    case '#line2':
      $("#line2").addClass("activeWidth2");
      break;
    case '#header5':
      $("#header5").addClass("active");
      break;
    case '#header6':
      $("#header6").addClass("active");
      $("#line4").addClass("activeWidth2");
      $("#description3").addClass("active2");
      $('#buttonBottom').addClass('active3');
      break;
    case '#header7':
      $("#header7").addClass("active");
      break;
    case '#coll':
      if (scrollCurrentPoistion === 0) {
        scrollCurrentPoistion = $(window).scrollTop() + 250;
      }
      var left = $(window).scrollTop() - scrollCurrentPoistion;
      $('#coll').css('left', left);
      break;
  }
}

function unCheck(element) {
  switch (element) {
    case '.slideUp':
      $(".slideUp").removeClass("active");
      break;
    case '#description1':
      $("#description1").removeClass("active2");
      break;
    case '#description2':
      $("#description2").removeClass("active2");
      break;
    case '#line1':
      $("#line1").removeClass("activeWidth");
      break;
    case '#button1':
      $("#button1").removeClass("scaleUp");
      break;
    case '#header2':
      $("#header2").removeClass("active");
      $('.body').removeClass('invertColor');
      break;
    case '#header3':
      $("#header3").removeClass("active");
      break;
    case '#header4':
      $("#header4").removeClass("active");
      $("#grid1").removeClass("active2");
      $("#grid2").removeClass("active3");
      $("#grid3").removeClass("active2");
      $("#line3").removeClass("activeWidth2");
      break;
    case '#header6':
      $("#header6").removeClass("active");
      $("#line4").removeClass("activeWidth2");
      $("#description3").removeClass("active2");
      $('#buttonBottom').removeClass('active3');
      break;
    case '#header7':
      $("#header7").removeClass("active");
      break;
    case '#header5':
      $("#header5").removeClass("active");
      $('.desClass').removeClass('active2');
      break;
    case '#line2':
      $("#line2").removeClass("activeWidth2");
      break;
  }

}

function checkVisible(elm, eval) {
  eval = eval || "object visible";
  var viewportHeight = $(window).height(), // Viewport Height
    scrolltop = $(window).scrollTop(), // Scroll Top
    y = $(elm).offset().top,
    elementHeight = $(elm).height();

  if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
  if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}

window.onload = function () {
  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");
  swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 50,
    mousewheelControl: true,
    mousewheelReleaseOnEdges: true
  });
  $(".slideUp").addClass("active");
  // scrollCheck('.slideUp');
  // scrollCheck('#description1');
  // scrollCheck('#line1');
  // scrollCheck('#line2');
  // scrollCheck('#button1');
  // scrollCheck('#header2');
  // scrollCheck('#header3');
  // scrollCheck('#description2');
  // scrollCheck('#coll');
  // scrollCheck('#header4');
  // scrollCheck('#header5');
  // scrollCheck('#header6');
  // scrollCheck('#header7');
  // scrollCheck('#swiper');
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });


  locoScroll.on('scroll', (func, dir, obj) => {
    console.log(func['currentElements'])
    if (func['currentElements']) {
      if (func['currentElements']['el0']) {
        check('.slideUp');
        check('#description1');
        check('#line1');
        check('#button1');

        unCheck('#header2');
        unCheck('#header3');
      }
      if (func['currentElements']['el1']) {
        unCheck('#header2');
        unCheck('#header3');
        unCheck('#description2');
        unCheck('#line2');

      }
      if (func['currentElements']['el2']) {
        unCheck('.slideUp');
        unCheck('#description1');
        unCheck('#line1');
        unCheck('#button1');
        check('#line2');

        check('#header2');
        check('#header3');
        check('#description2');

        unCheck('#header4');
        unCheck('#line3');
        unCheck('#header5');
      }
      if (func['currentElements']['el3']) {
        unCheck('#header2');
        unCheck('#header3');
        unCheck('#description2');
        unCheck('#line2');

        check('#header4');
        check('#line3');
        check('#header5');

        unCheck('#header6');
        unCheck('#header7');
      }
      if (func['currentElements']['el4']) {

      }
      if (func['currentElements']['el5']) {
        // unCheck('#header2');
        // unCheck('#header3');
        // unCheck('#description2');
        // unCheck('#line2');

        // unCheck('#header4');
        // unCheck('#line3');
        // unCheck('#header5');

        check('#header6');
        check('#header7');
      }
      if (func['currentElements']['el6']) {

        unCheck('#header4');
        unCheck('#line3');
        unCheck('#header5');
      }
    }
  })
  // scrollCheck()
  // $(".slideUp").addClass("active");
  // menu_btn.addEventListener("click", function () {
  //   menu_btn.classList.toggle("is-active");
  // });

  // menu_btn.addEventListener("click", function () {
  //   mobile_menu.classList.toggle("is-active");
  // });


  // setTimeout(function () {
  //   document.querySelector(".slideUp2").classList.add("active");
  // }, 100);

};