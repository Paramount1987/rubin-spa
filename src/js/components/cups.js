var cupsTemplate = require('../../jade/cups');
var Cups = require('../data/cups');

var cupsInit = function(){

   var $cups = $('.owl-carousel--cups');
   //----------------------------------------------add players
   for(var i = 0; i < Cups.cups.length; i++){
      $cups.append( cupsTemplate( {'cup': Cups.cups[i], 'index': i, 'type': 'cup' }  ));
   }

   $cups.owlCarousel({
      loop:false,
      margin:25,
      nav:true,
      items: 3,
      dots: false,
      navText: [],
      smartSpeed: 500
   });
}


module.exports.init = cupsInit;
