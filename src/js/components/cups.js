var cupsTemplate = require('../../jade/cups');
var Cups = require('../data/cups');

var cupsInit = function(){

   var $cups = $('.owl-carousel--cups');
   $('.wrapper').removeClass('wrapper--history');
   //----------------------------------------------add cups
   for(var i = 0; i < Cups.cups.length; i++){
      $cups.append( cupsTemplate( {'cup': Cups.cups[i], 'index': i, 'type': 'cup' }  ));
   }

   var owlCup = $cups.owlCarousel({
      loop:false,
      margin:25,
      nav:true,
      items: 3,
      dots: true,
      navText: [],
      smartSpeed: 500
   });

   $('.cup-dot').click(function(e){
      e.preventDefault();
      var index = $(this).index();
      owlCup.trigger('to.owl.carousel',[index , 500]);
   });
}


module.exports.init = cupsInit;
