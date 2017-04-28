function MainManager_f() {

  this.navMobile = $('[data-nav-mobile]');
  this.linkMobile = $('[data-link-mobile]');
  this.navParent = $('nav');
  this.btnMenu = $('[data-toggle]');
  this.btnScroll = $('[data-scroll]');
  this.regexpMail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
  this.regexpAll = /[^\>]*/;
  this.mail = $('[data-mail]');
  this.all = $('[data-all]');
  this.fieldValidate = $('[data-validate]');
  this.feedbackForm = $('[data-feedback-form]');

  this.init = function () {

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

        MainManager.navParent.addClass('fix');

      } else {

        MainManager.navParent.removeClass('fix');
      }

    });

    MainManager.btnMenu.on('click',function(){

      $(this).toggleClass('active');

      MainManager.navMobile.slideToggle(300);

    });

    MainManager.linkMobile.on('click', function(){

      MainManager.navMobile.slideUp(300);

      if(MainManager.btnMenu.hasClass('active')) {

        MainManager.btnMenu.removeClass('active');
      }

    });

    MainManager.btnScroll.on('click', function(){

      var go = $(this).attr('data-scroll');

      var to = $('#'+go).offset().top;

      $('html, body').animate({"scrollTop" : to}, 750);
    });

    MainManager.mail.on('focusout', function() {

      MainManager.validInit($(this), MainManager.regexpMail);

    });

    MainManager.all.on('focusout',function(){

      MainManager.validInit($(this), MainManager.regexpAll);

    });

    MainManager.fieldValidate.on('focus', function(){

      MainManager.validClear($(this));

    })
  };

  this.showModal = function (id){

    var modal = $('#'+id);

    modal.modal({
      backdrop: 'static'
    });

    modal.modal('show');
  };

  this.hideModal = function (id){

    var modal = $('#'+id);

    modal.find('input').removeClass('field-has-error').val('');

    modal.modal('hide');

    $('[data-end]').fadeOut('300', function(){
      $('[data-start]').fadeIn('300')
    });
  };

  this.validInit = function(input,valid) {

    MainManager.validClear(input);

    if (valid.test(input.val()) && input.val() != '') {

      MainManager.validClear(input);

      return true;

    } else {

      if(input.val() == '') {

        MainManager.validError(input);

      } else {

        MainManager.validError(input);
      }

      return false;
    }
  };

  this.validClear = function(input) {

    input.removeClass('field-has-error');

  };

  this.validError = function(input) {

    input.addClass('field-has-error');

  };

  this.dataJSON = function(form) {

    var o = {};

    var a = form.serializeArray();

    $.each(a, function () {

      if (o[this.name]) {

        if (!o[this.name].push) {

          o[this.name] = [o[this.name]];

        }

        o[this.name].push(this.value || '');

      } else {

        o[this.name] = this.value || '';

      }
    });

    return o;
  };

  this.submit = function() {
    var validate = [
      {
        name: 'data-validate-name',
        regexp: MainManager.regexpAll
      },
      {
        name: 'data-validate-country',
        regexp: MainManager.regexpAll
      },
      {
        name: 'data-validate-mail',
        regexp: MainManager.regexpMail
      },
      {
        name: 'data-validate-inquiry',
        regexp: MainManager.regexpAll
      }
    ];

    var valid;

    for (var i in validate) {

      valid = MainManager.validInit($('['+validate[i].name+']'),validate[i].regexp);

      if (!valid) {
        break;
      }
    }

    if (valid) {

      $('[data-start]').fadeOut('300', function(){
        $('[data-end]').fadeIn('300')
      });

      var data = MainManager.dataJSON(MainManager.feedbackForm);

      console.log(data);

    } else {

      return false;
    }
  };

}
