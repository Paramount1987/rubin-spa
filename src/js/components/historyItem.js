var historyTemplate = require('../../jade/historyItem');
var historyData = require('../data/history');

var historyInit = function(curSlide){

   var $linkback = $('.link-back');
   var slide = curSlide;
   var $history = $('.owl-carousel--historyItem');
   var $historyPos = $('.history-dots-pos');
   var periodTitle = $('.period-date');

   $('.wrapper').addClass('wrapper--history');
   //----------------------------------------------add images
   for(var i = 0; i < historyData.history.length; i++){
      $history.append( historyTemplate( {'history': historyData.history[i], 'group': i }  ));
   }

   var historySlider = $history.owlCarousel({
      items:1,
      loop:false,
      dots: true,
      nav: false,
      margin:0,
      smartSpeed: 500,
      startPosition: slide,
      onInitialize: function(){

         //set current index slide
         $linkback.attr('data-item', slide);

         periodTitle.html(historyData.history[slide]['period']);

         if( !slide ){
            $historyPos.css({"transform":"translate(0,0)"});
         }else{
            var pos = (slide * 154) + 'px';
            $historyPos.css({"transform":"translate(" + pos + ",0)"});
         }

      }
   });

   

   historySlider.on('changed.owl.carousel', function(event){
      //------------------stop audio playing
      audioStop();

      //set current index slide
      $linkback.attr('data-item', event.item.index);

      //change period title
      periodTitle.html(historyData.history[event.item.index]['period']);

      if( !event.item.index ){
         $historyPos.css({"transform":"translate(0,0)"});
      }else{
         var pos = (event.item.index * 154) + 'px';
         $historyPos.css({"transform":"translate(" + pos + ",0)"});
      }

   });

   //-----------------------fancybox
    $(".fancybox").fancybox({
       openEffect : 'elastic',
       closeEffect   : 'elastic'
    });

   //---------------------scroll pane for video
   $('.item-history__photo-inner--video img').load(function(){
      $('.item-history__right.scroll-pane').jScrollPane();
   });

   //--------------------------------------video modal
   var $videoClip = $('#videoClip');

   //------------------------------------
   var videoClip = document.getElementById('videoClip');
   videoClip.onloadstart = function() {
    setTimeout( function() { $videoClip.get(0).play() } , 350);
   };
   //----------------------------------

   $(".fancyboxVideo").fancybox({
       maxWidth : 1400,
       openEffect : 'elastic',
       closeEffect   : 'elastic',
       beforeClose: function(){
         $videoClip.get(0).pause();
       },
       afterLoad: function(e){
          audioStop();

          $videoClip.attr('src', $(e.element).data('video'));
          $videoClip.get(0).load();
       }
    });

   //----------------------audio sound controls
   function audioStop(){
        if ( $('.sound-track').hasClass('is-active') ) {
          $('.sound-track.is-active').next('.audio-sound').get(0).pause();
          $('.sound-track.is-active').next('.audio-sound').get(0).currentTime = 0;
          $('.sound-track.is-active').removeClass('is-active');
        }
   }

   $('.sound-track').click(function(e){
      e.preventDefault();
      $(this).toggleClass('is-active');

      if( $(this).hasClass('is-active') ){
          $(this).next('.audio-sound').get(0).play();
      }else{
          $(this).next('.audio-sound').get(0).pause();
          $(this).next('.audio-sound').get(0).currentTime = 0;
      }
      
   });

}

module.exports.init = historyInit;