$(function () {
  "use strict";
  //Change The Page Scroll
  $('body').niceScroll({ cursorcolor: '#333' });

  // Start fixed navbar
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('.navbar-section').addClass('fixed-top');
    } else {
      $('.navbar-section').removeClass('fixed-top');
    }
  });

  // like-to-know drobdown show and hidden
  $(".like-to-know .dropdown-title").on("click", function () {
    $(".like-to-know  .dropdown-items").toggleClass("hide");
  });

  // Products slider
  $(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      rtl: true,
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        767: {
          items: 2
        },
        990: {
          items: 3,
          nav: true,
        }
      }
    });
  });

  //Start The Equal sections Height

  (function () {
    equalHeight(false);
  })();

  window.onresize = function () {
    equalHeight(true);
  }

  function equalHeight(resize) {
    var elements = document.getElementsByClassName("aboutHeight"),
      allHeights = [],
      i = 0;
    if (resize === true) {
      for (i = 0; i < elements.length; i++) {
        elements[i].style.height = 'auto';
      }
    }
    for (i = 0; i < elements.length; i++) {
      var elementHeight = elements[i].clientHeight;
      allHeights.push(elementHeight);
    }
    for (i = 0; i < elements.length; i++) {
      elements[i].style.height = Math.max.apply(Math, allHeights) + 'px';
      if (resize === false) {
        elements[i].className = elements[i].className + " show";
      }
    }
  }

  //home message
  $("#typed").typed({
    strings: ["محمد خضر"],
    typeSpeed: 100,
    startDelay: 0,
    backSpeed: 60,
    backDelay: 2000,
    loop: true,
    cursorChar: "",
    contentType: 'html'
  });

  //The HomePage Arrow And Get Started Button Click
  $("#mouse-scroll .mouse").click(function () {
    $("html, body").animate({
      scrollTop: $(".video-section").offset().top
    }, 1000);
  });

  // News Letter
  $(".news-letter h5").on("click", function () {
    $(".news-letter form").toggleClass("form-hide");
    $(".news-letter .close-section").toggleClass("close-hide");
    $(".news-letter").toggleClass("width-change");
  });

  $(".news-letter .close-section").on("click", function () {
    $(".news-letter form").toggleClass("form-hide");
    $(".news-letter .close-section").toggleClass("close-hide");
    $(".news-letter").toggleClass("width-change");
  });

});

$(document).ready(function () {
  // executes when HTML-Document is loaded and DOM is ready

  // breakpoint and up  
  $(window).resize(function () {
    if ($(window).width() >= 980) {

      // when you hover a toggle show its dropdown menu
      $(".navbar .dropdown-toggle").hover(function () {
        $(this).parent().toggleClass("show");
        $(this).parent().find(".dropdown-menu").toggleClass("show");
      });

      // hide the menu when the mouse leaves the dropdown
      $(".navbar .dropdown-menu").mouseleave(function () {
        $(this).removeClass("show");
      });

      // do something here
    }
  });



  // document ready  
});