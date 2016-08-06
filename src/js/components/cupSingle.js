var cupTemplate = require('../../jade/cupFull');
var Cups = require('../data/cups');

var cupsInit = function(curSlide){

   var $cups = $('.owl-carousel--cupSingle');
   $('.wrapper').removeClass('wrapper--history');
   //----------------------------------------------add cups
   for(var i = 0; i < Cups.cups.length; i++){
      $cups.append( cupTemplate( {'cup': Cups.cups[i], 'group': i } ));
   }

   //----------------------slider
   $cups.owlCarousel({
      loop:true,
      nav:true,
      items: 1,
      dots: false,
      navText: [],
      smartSpeed: 700,
      startPosition: curSlide
   });

   //-----------------------fancybox
    $(".fancybox").fancybox({
       openEffect	: 'elastic',
       closeEffect	: 'elastic'
    });

}


module.exports.init = cupsInit;
