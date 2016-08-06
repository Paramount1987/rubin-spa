var team = require('../data/team');

var playerTemplate = require('../../jade/team/player');

//------------------------------players
function playersInit(){
   var $players = $('.owl-carousel--players');
   $('.wrapper').removeClass('wrapper--history');
   //----------------------------------------------add players
   for(var i = 0; i < team.players.length; i++){
      $players.append( playerTemplate( {'player': team.players[i], 'index': i, 'type':'player' }  ));
   }

      $players.owlCarousel({
            loop:true,
            margin:25,
            nav:true,
            items: 5,
            dots: false,
            navText: []
         });
};
//------------------------------------directors init
function directorsInit(){
   var $directors = $('.owl-carousel--directors');

   for(var i = 0; i < team.directors.length; i++){
      $directors.append( playerTemplate( {'player': team.directors[i], 'index': i, 'type': 'director' }  ));
   }
};

//------------------------------coach
function coachInit(){
   var $coach = $('.owl-carousel--coach');

   //----------------------------------------------add players
   for(var i = 0; i < team.coach.length; i++){
      $coach.append( playerTemplate( {'player': team.coach[i], 'index': i, 'type':'coach' }  ));
   }

   $coach.owlCarousel({
      loop:true,
      margin:25,
      nav:true,
      items: 5,
      dots: false,
      navText: []
   });
};
//--------------------init function

function init(){
   playersInit();
   directorsInit();
   coachInit();
}


module.exports.players = init;