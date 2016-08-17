var calendar = require('../data/calendar');

var calendarTemplate = require('../../jade/calendar');

//------------------------------calendar
function calendarInit(){

   var $dots = $('.js-calendar-link');
   var $calendar = $('.owl-carousel--calendar');
   $('.wrapper').removeClass('wrapper--history');
   //----------------------------------------------add games
   for(var i = 0; i < calendar.games.length; i++){
      $calendar.append( calendarTemplate( {'calendar': calendar.games[i] }  ));
   }

   $calendar.owlCarousel({
      loop:false,
      nav:true,
      items: 1,
      dots: true,
      navText: [],
      smartSpeed: 700
   });

   //-------------------------------dot control
   $('.js-calendar-link[data-index="0"]').addClass('active');

   $dots.click(function(e){
      e.preventDefault();
      var index = $(this).data('index');
      $calendar.trigger('to.owl.carousel',[index, 700]);

      //------------------------------active class
      $dots.removeClass('active');
      $(this).addClass('active');
   });

   //----------slide change to active class
   $calendar.on('changed.owl.carousel', function(e) {
      $dots.removeClass('active');
      console.log(e.item.index);
      $('.js-calendar-link[data-index="' + e.item.index + '"]').addClass('active');
   });
};


//--------------------init function

function init(){
   calendarInit();
}

module.exports.init = init;