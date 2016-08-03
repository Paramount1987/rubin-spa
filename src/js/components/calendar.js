var calendar = require('../data/calendar');

var calendarTemplate = require('../../jade/calendar');

//------------------------------calendar
function calendarInit(){
   var $calendar = $('.owl-carousel--calendar');
   //----------------------------------------------add games
   for(var i = 0; i < calendar.games.length; i++){
      $calendar.append( calendarTemplate( {'calendar': calendar.games[i] }  ));
   }

   $calendar.owlCarousel({
      loop:true,
      nav:true,
      items: 1,
      dots: false,
      navText: [],
      smartSpeed: 700
   });
};

//--------------------init function

function init(){
   calendarInit();
}


module.exports.init = init;