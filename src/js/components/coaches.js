var coachTemplate = require('../../jade/team/coachFull');
var team = require('../data/team');

var coachInit = function(curSlide){

   var $coach = $('.owl-carousel--coachSingle');
   //----------------------------------------------add players
   for(var i = 0; i < team.coach.length; i++){
      $coach.append( coachTemplate( {'coach': team.coach[i] }  ));
   }

   $coach.owlCarousel({
      loop:true,
      nav:true,
      items: 1,
      dots: false,
      navText: [],
      startPosition: curSlide,
      smartSpeed: 700
   });
}

module.exports.init = coachInit;