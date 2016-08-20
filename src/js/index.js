;(function($){

   //--------------------------------------------require
   var main = require('./components/main');
   var navmenu = require('./components/nav');
   var linkContentInit = require('./function/loadContent');

   //--------------------------------------------
      linkContentInit.init();//change dom content

   //-------------------------------
      $('document').ready(function(){
         $('#rubin-preloader').fadeOut();//-----------preloader

      });

   //----------------nav menu
      navmenu.nav.init();
   //-----------------------animate hover
      main.init();

}(jQuery));