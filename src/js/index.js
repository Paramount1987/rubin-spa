;(function($){

   //--------------------------------------------require
   var navmenu = require('./components/nav');
   var linkContentInit = require('./function/loadContent');

   //--------------------------------------------
      linkContentInit.init();//change dom content

   //-------------------------------scroll pane
      $('document').ready(function(){
         $('#rubin-preloader').fadeOut();//-----------preloader
      });

   //----------------nav menu
      navmenu.nav.init();

}(jQuery));