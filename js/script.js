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

  $("[data-about-slide]").owlCarousel({
    items: 1,
    nav: false
  });

  $("[data-team-slide]").owlCarousel({
    items: 5,
    margin: 40,
    nav: true,
    dots: false,
    navText:['','']
  });

});

(function($) {


  //$(window).on( 'resize load', initNav );




  $("#competence-list").owlCarousel({
    navigation : true,
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    navigationText : ["", ""]
  });

  $("#experience-list,#customers-list").owlCarousel({
    navigation : true,
    slideSpeed : 300,
    items : 4,
    itemsDesktop : [1000,4],
    itemsDesktopSmall : [751,3],
    itemsTablet: [665,2],
    itemsMobile : [456,1],
    paginationSpeed : 400,
    navigationText : ["", ""]

  });
  $("#manager-list").owlCarousel({
    navigation : true,
    slideSpeed : 300,
    items : 2,
    itemsDesktop : [1000,2],
    itemsDesktopSmall : [979, 2],
    itemsTablet : [751, 1],
    paginationSpeed : 400,
    navigationText : ["", ""]
  });
  $("#team-list").owlCarousel({
    navigation : true,
    slideSpeed : 300,
    items : 5,
    itemsDesktop : [1000,5],
    itemsDesktopSmall : [742,3],
    itemsTablet: [665,2],
    itemsMobile : [456,1],
    paginationSpeed : 400,
    navigationText : ["", ""]
  });

})(jQuery);
