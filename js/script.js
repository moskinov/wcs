(function($) {


  function initNav(){

    var navH = $('.navigation').height();

    $('#main-navigation-link,#navigation-link').singlePageNav({
      offset: navH,
      speed: 0,
      threshold: 400,
      filter: '',
      easing: '',
      currentClass: 'active'
    });
  }

  $(window).on( 'resize load', initNav );

  $(window).on('scroll',function(){
    var wnd = $(this);
    var header = $('.intro-box').height();

    if(wnd.scrollTop() > 1) {
      $('.navigation-box').addClass('fix');
    } else {
      $('.navigation-box').removeClass('fix');
    }

  });

  $('#toggle-menu').on('click',function(){

    var but = $(this);
    var nav = $('#navigation-link');
    var link = $('.show-section');

    but.toggleClass('active');
    nav.slideToggle(300);

    link.click(function(){
      nav.slideUp(300);
      if(but.hasClass('active')) {
        but.removeClass('active')
      }
    })
  });


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

  $('.team-info .owl-carousel .owl-item').after(" ");

  $('.b-widget_addition').live('click',function(){

    $("html,body").animate({"scrollTop":$(window).scrollTop()+200},300);
    $(this).closest('.b-widget').toggleClass('open');

  });

})(jQuery);
