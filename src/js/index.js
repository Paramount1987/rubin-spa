;(function($){

   //--------------------------------------------require
   var navmenu = require('./components/nav');
   var slider = require('./components/slider');
   var team = require('./components/team');

   var linkContentInit = require('./function/loadContent');

   //--------------------------------------------
      linkContentInit.init();//change dom content


   //-------------------------------scroll pane
      $('document').ready(function(){
         //$('.scroll-pane').jScrollPane();
         $('#rubin-preloader').fadeOut();//-----------preloader
      });


   //----------------nav menu
      navmenu.nav.init();

   //----------------slider
      slider.slider.init();

   //---------------------team players
      team.players();

}(jQuery));