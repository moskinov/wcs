$(document).ready(function() {

    var aboutSlider = $("[data-about-slide]");
    var teamSlider = $("[data-team-slide]");
    var teamPrev = $("[data-team-prev]");
    var teamNext = $("[data-team-next]");

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
