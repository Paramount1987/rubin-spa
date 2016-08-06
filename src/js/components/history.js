var historyTemplate = require('../../jade/historySlide');
var historyData = require('../data/history');

var historyInit = function(){

   var $history = $('.owl-carousel--history');

   $('.wrapper').addClass('wrapper--history');
   //----------------------------------------------add images
   for(var i = 0; i < historyData.history.length; i++){
      $history.append( historyTemplate( {'history': historyData.history[i], 'index': i }  ));
   }


   var historySlider = $history.owlCarousel({
      center: true,
      items:2,
      loop:false,
      dots: true,
      nav: false,
      margin:0,
      smartSpeed: 500
   });

   var $historyPos = $('.history-dots-pos');

   historySlider.on('changed.owl.carousel', function(event){
      if( !event.item.index ){
         $historyPos.css({"transform":"translate(0,0)"});
      }else{
         var pos = (event.item.index * 154) + 'px';
         $historyPos.css({"transform":"translate(" + pos + ",0)"});
      }

   });

}


module.exports.init = historyInit;