var coachTemplate = require('../../jade/team/coachFull');
var team = require('../data/team');

var coachInit = function(curSlide){

   var $linkback = $('.link-back');
   var $coach = $('.owl-carousel--coachSingle');
   $('.wrapper').removeClass('wrapper--history');
   //----------------------------------------------add players
   for(var i = 0; i < team.coach.length; i++){
      $coach.append( coachTemplate( {'coach': team.coach[i] }  ));
   }

   //----------------------------------------get index active slide
   $coach.on('initialized.owl.carousel translated.owl.carousel', function(e) {
      $linkback.attr('data-item', e.item.index - e.relatedTarget._clones.length / 2);
   })

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