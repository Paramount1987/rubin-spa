
var slider = {
   init: function(){

      $('.owl-carousel--team').owlCarousel({
         loop:true,
         margin:25,
         nav:true,
         items: 5,
         dots: false,
         navText: []
      });

      $('.owl-carousel--single').owlCarousel({
         loop:true,
         nav:true,
         items: 1,
         dots: false,
         navText: []
      })
   }
}

module.exports.slider = slider;