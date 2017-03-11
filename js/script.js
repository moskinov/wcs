$(document).ready(function() {

  var navMobile = $('[data-nav-mobile]');
  var linkMobile = $('[data-link-mobile]');
  var navParent = $('nav');
  var btnMenu = $('[data-toggle]');
  var btnScroll = $('[data-scroll]');

  $('[data-nav-default],[data-nav-mobile]').onePageNav({
    currentClass: 'current',
    changeHash: true,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: ':not(.external)',
    easing: 'swing'
  });

  $(window).on('scroll',function(){

    if($(this).scrollTop() > 60) {

      navParent.addClass('fix');

    } else {

      navParent.removeClass('fix');
    }

  });

  btnMenu.on('click',function(){

    $(this).toggleClass('active');

    navMobile.slideToggle(300);

  });

  linkMobile.on('click', function(){

    navMobile.slideUp(300);

    if(btnMenu.hasClass('active')) {

      btnMenu.removeClass('active');
    }

  });

  btnScroll.on('click', function(){

    var go = $(this).attr('data-scroll');

    var to = $('#'+go).offset().top;

    $('html, body').animate({"scrollTop" : to}, 750);
  });

});
