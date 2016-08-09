var historyTemplate = require('../../jade/historySlide');
var historyData = require('../data/history');

var historyInit = function(){

   var $history = $('.owl-carousel--history');
   var arrWidth = ['1100px','1500px','1500px','1500px','1850px','1100px','1600px','1700px','1850px','1850px'];

   $('.wrapper').addClass('wrapper--history');
   //----------------------------------------------add images
   for(var i = 0; i < historyData.history.length; i++){
      $history.append( historyTemplate( {'history': historyData.history[i], 'index': i, 'width':arrWidth[i] }  ));
   }


   var historySlider = $history.owlCarousel({
      center: true,
      items:2,
      loop:false,
      dots: true,
      nav: false,
      margin:0,
      smartSpeed: 500,
      autoWidth: true
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