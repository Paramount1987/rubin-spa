var gloryTemplate = require('../../jade/gloryItem');
var dataGlory = require('../data/glory');

var gloryInit = function(curSlide){

   var $glory = $('.owl-carousel--glorySingle');
   //----------------------------------------------add players
   for(var i = 0; i < dataGlory.glory.length; i++){
      $glory.append( gloryTemplate( {'glory': dataGlory.glory[i] }  ));
   }

   $glory.owlCarousel({
      loop:true,
      nav:true,
      items: 1,
      dots: false,
      navText: [],
      startPosition: curSlide,
      smartSpeed: 700
   });
}


module.exports.init = gloryInit;
