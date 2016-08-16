var playerTemplate = require('../../jade/team/playerFull');
var team = require('../data/team');

var playersInit = function(curSlide){

   var $linkback = $('.link-back');
   var slide = curSlide;
   var $player = $('.owl-carousel--playerSingle');
   $('.wrapper').removeClass('wrapper--history');

   //----------------------------------------------add players
   for(var i = 0; i < team.players.length; i++){
      $player.append( playerTemplate( {'player': team.players[i] }  ));
   }

   //----------------------------------------get index active slide
   $player.on('initialized.owl.carousel translated.owl.carousel', function(e) {
      $linkback.attr('data-item', e.item.index - e.relatedTarget._clones.length / 2);
   })
   //-------------------------------

   $player.owlCarousel({
      loop:true,
      nav:true,
      items: 1,
      dots: false,
      navText: [],
      startPosition: slide,
      smartSpeed: 700
   });


}

module.exports.init = playersInit;
