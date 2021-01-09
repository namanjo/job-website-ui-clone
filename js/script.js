$(document).ready(function() {
  $('.js--nav-icon').click(function() {
    var nav = $('.my-nav');
    var icon = $('.my-nav i');


    nav.slideToggle(400);

    if(icon.hasClass('ion-navicon-round')){
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else{
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }

  });
});
