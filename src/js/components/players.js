var playerTemplate = require('../../jade/team/playerFull');
var team = require('../data/team');

var playersInit = function(curSlide){

   var $player = $('.owl-carousel--playerSingle');
   $('.wrapper').removeClass('wrapper--history');
   //----------------------------------------------add players
   for(var i = 0; i < team.players.length; i++){
      $player.append( playerTemplate( {'player': team.players[i] }  ));
   }

   $player.owlCarousel({
      loop:true,
      nav:true,
      items: 1,
      dots: false,
      navText: [],
      startPosition: curSlide,
      smartSpeed: 700
   });
}

module.exports.init = playersInit;
