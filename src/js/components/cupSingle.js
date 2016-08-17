var cupTemplate = require('../../jade/cupFull');
var Cups = require('../data/cups');

var cupsInit = function(curSlide){

   var $cups = $('.owl-carousel--cupSingle');
   var $cupdot = $('.cup-dot');
   $('.wrapper').removeClass('wrapper--history');
   //----------------------------------------------add cups
   for(var i = 0; i < Cups.cups.length; i++){
      $cups.append( cupTemplate( {'cup': Cups.cups[i], 'group': i } ));
   }

   //----------------------slider
    $cups.owlCarousel({
      loop:false,
      nav:true,
      items: 1,
      dots: true,
      navText: [],
      smartSpeed: 700,
      startPosition: curSlide
   });

   //-------------------------
   switch (curSlide){
      case 0:
      case 1:
         $('.cup-dot[data-index="1"]').addClass('active');
         break;
      case 2:
         $('.cup-dot[data-index="2"]').addClass('active');
         break;
      case 3:
         $('.cup-dot[data-index="3"]').addClass('active');
         break;
      case 4:
      case 5:
         $('.cup-dot[data-index="4"]').addClass('active');
         break;
   }

   $cupdot.click(function(e){
      e.preventDefault();
      var index = $(this).data('index');
      $cups.trigger('to.owl.carousel',[index, 500]);

      //------------------------------active class
      $cupdot.removeClass('active');
      $(this).addClass('active');
   });

   //----------slide change to active class
   $cups.on('changed.owl.carousel', function(e){

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

   //-----------------------fancybox
    $(".fancybox").fancybox({
       openEffect	: 'elastic',
       closeEffect	: 'elastic'
    });

}


module.exports.init = cupsInit;
