var historyTemplate = require('../../jade/historySlide');
var historyData = require('../data/history');

var historyInit = function(curSlide){

   var $dataHistoryItem = $('.js-gallery-link');

   var $history = $('.owl-carousel--history');
   var $historyPos = $('.history-dots-pos');
   var arrWidth = ['1000px','1200px','1100px','1200px','1890px','1100px','1600px','1400px','1850px','1850px'];

   $('.wrapper').addClass('wrapper--history');
   //----------------------------------------------add images
   for(var i = 0; i < historyData.history.length; i++){
      $history.append( historyTemplate( {'history': historyData.history[i], 'index': i, 'width':arrWidth[i] }  ));
   }

   //-------------------------------------------set dot position
   $history.on('initialized.owl.carousel', function(event) {
      if( !event.item.index ){
         $historyPos.css({"transform":"translate(0,0)"});
      }else{
         var pos = (event.item.index * 154) + 'px';
         $historyPos.css({"transform":"translate(" + pos + ",0)"});
      }

      $dataHistoryItem.attr('data-history-item', event.item.index)
   })
   //-------------------------------------------

   var historySlider = $history.owlCarousel({
      center: true,
      items:2,
      loop:false,
      dots: true,
      nav: false,
      margin:0,
      smartSpeed: 500,
      autoWidth: true,
      startPosition: curSlide
   });


   historySlider.on('changed.owl.carousel', function(event){
      if( !event.item.index ){
         $historyPos.css({"transform":"translate(0,0)"});
      }else{
         var pos = (event.item.index * 154) + 'px';
         $historyPos.css({"transform":"translate(" + pos + ",0)"});
      }

      $dataHistoryItem.attr('data-history-item', event.item.index)

   });

}


module.exports.init = historyInit;