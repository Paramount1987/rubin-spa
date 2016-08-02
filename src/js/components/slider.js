
var slider = {
   init: function(){

      $('.owl-carousel--cups').owlCarousel({
         loop:false,
         margin:25,
         nav:true,
         items: 3,
         dots: false,
         navText: [],
         smartSpeed: 500
      });
//---------------------------------------------------------------
      $('.owl-carousel--single').owlCarousel({
         loop:true,
         nav:true,
         items: 1,
         dots: false,
         navText: []
      });
//---------------------------------------------------------------
      $('.owl-carousel--calendar').owlCarousel({
         loop:true,
         nav:true,
         items: 1,
         dots: false,
         navText: [],
         smartSpeed: 700
      });
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