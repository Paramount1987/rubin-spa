var directorTemplate = require('../../jade/team/directorFull');
var team = require('../data/team');

var directorsInit = function(curSlide){

   var $directors = $('.owl-carousel--directorsSingle');
   $('.wrapper').removeClass('wrapper--history');
   //----------------------------------------------add players
   for(var i = 0; i < team.directors.length; i++){
      $directors.append( directorTemplate( {'director': team.directors[i] }  ));
   }

   $directors.owlCarousel({
      loop:true,
      nav:true,
      items: 1,
      dots: false,
      navText: [],
      startPosition: curSlide,
      smartSpeed: 700
   });
}

module.exports.init = directorsInit;
