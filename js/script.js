$(document).ready(function() {

  var navMobile = $('[data-nav-mobile]');
  var linkMobile = $('[data-link-mobile]');
  var navParent = $('nav');
  var btnMenu = $('[data-toggle]');
  var btnScroll = $('[data-scroll]');
  var aboutSlider = $("[data-about-slide]");
  var teamSlider = $("[data-team-slide]");
  var teamPrev = $("[data-team-prev]");
  var teamNext = $("[data-team-next]");

  $('[data-nav-default],[data-nav-mobile]').onePageNav({
    currentClass: 'current',
    changeHash: true,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: ':not(.external)',
    easing: 'swing',
    begin: function() {
      //I get fired when the animation is starting
    },
    end: function() {
      //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
      //I get fired when you enter a section and I pass the list item of the section
    }
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

  aboutSlider.owlCarousel({
    items: 1,
    nav: false
  });

  teamSlider.owlCarousel({
    items: 5,
    responsive:{
      0:{
        items:1
      },
      641:{
        items:2
      },
      769:{
        items:3
      },
      1281:{
        items:5
      }
    },
    margin: 40,
    nav: false,
    dots: false,
    navText:['','']
  });

  teamNext.on('click', function() {

    teamSlider.trigger('next.owl.carousel');
  });

  teamPrev.click(function() {

    teamSlider.trigger('prev.owl.carousel');
  });

});
