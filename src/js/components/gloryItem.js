var gloryTemplate = require('../../jade/gloryItem');
var dataGlory = require('../data/glory');

var gloryInit = function(curSlide){

   var $linkback = $('.link-back');
   var $glory = $('.owl-carousel--glorySingle');
   $('.wrapper').removeClass('wrapper--history');
   //----------------------------------------------add players
   for(var i = 0; i < dataGlory.glory.length; i++){
      $glory.append( gloryTemplate( {'glory': dataGlory.glory[i] }  ));
   }

   //----------------------------------------get index active slide
   $glory.on('initialized.owl.carousel', function(e) {
      $linkback.attr('data-item', e.item.index - e.relatedTarget._clones.length / 2);
   })
   //-------------------------------

   $glory.owlCarousel({
      loop:true,
      nav:true,
      items: 1,
      dots: false,
      navText: [],
      startPosition: curSlide,
      smartSpeed: 700
   });

   //----------------------------------------get index active slide
   $glory.on('changed.owl.carousel', function(e) {
      $linkback.attr('data-item', e.item.index - e.relatedTarget._clones.length / 2);
   })
   //-------------------------------
}


module.exports.init = gloryInit;
