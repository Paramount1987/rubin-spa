
var slider = {
   init: function(){

//---------------------------------------------------------------
      var historySlider = $('.owl-carousel--history').owlCarousel({
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
            var pos = (event.item.index * 165) + 'px';
            $historyPos.css({"transform":"translate(" + pos + ",0)"});
         }

      });
//---------------------------------------------------------------
   }
}

module.exports.slider = slider;