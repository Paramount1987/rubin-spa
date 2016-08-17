var cupsTemplate = require('../../jade/cups');
var Cups = require('../data/cups');

var cupsInit = function(){

   var $cups = $('.owl-carousel--cups');
   var $cupdot = $('.cup-dot');
   $('.wrapper').removeClass('wrapper--history');
   //----------------------------------------------add cups
   for(var i = 0; i < Cups.cups.length; i++){
      $cups.append( cupsTemplate( {'cup': Cups.cups[i], 'index': i, 'type': 'cup' }  ));
   }

   var owlCup = $cups.owlCarousel({
      center: true,
      loop:false,
      margin:25,
      nav:true,
      items: 3,
      dots: true,
      navText: [],
      smartSpeed: 500,
      startPosition: 1
   });

   $('.cup-dot').click(function(e){
      e.preventDefault();
      var index = $(this).data('index');
      owlCup.trigger('to.owl.carousel',[index, 500]);

      //------------------------------active class
      $cupdot.removeClass('active');
      $(this).addClass('active');
   });

   //----------slide change to active class
   owlCup.on('changed.owl.carousel', function(e){

      switch (e.item.index){
         case 0:
         case 1:
            $cupdot.removeClass('active');
            $('.cup-dot[data-index="1"]').addClass('active');
            break;
         case 2:
            $cupdot.removeClass('active');
            $('.cup-dot[data-index="2"]').addClass('active');
            break;
         case 3:
            $cupdot.removeClass('active');
            $('.cup-dot[data-index="3"]').addClass('active');
            break;
         case 4:
         case 5:
            $cupdot.removeClass('active');
            $('.cup-dot[data-index="4"]').addClass('active');
            break;
         default :
            $cupdot.removeClass('active');
            break;
      }
   });
}


module.exports.init = cupsInit;
