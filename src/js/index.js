;(function($){

   //--------------------------------------------require
   var navmenu = require('./components/nav');
   var slider = require('./components/slider');
   //--------------------------------------------

   //-------------------------------scroll pane
      $('document').ready(function(){

         $('.scroll-pane').jScrollPane();
         $('#rubin-preloader').fadeOut();//-----------preloader

         $(window).resize(function(){
            $.each( $('.scroll-pane'), function(){
               var api = $(this).data('jsp');
               api.reinitialise();
            });
         });
      });


   //----------------nav menu
      navmenu.nav.init();
   //----------------slider
      slider.slider.init();


}(jQuery));