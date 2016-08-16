var team = require('../data/team');

var playerTemplate = require('../../jade/team/player');

//------------------------------players
function playersInit(curSlide,tabactive){

   var slide = tabactive == 'player' ? curSlide : 0;
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
            navText: [],
            startPosition: slide
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
function coachInit(curSlide,tabactive){

   var slide = tabactive == 'coach' ? curSlide : 0;
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
      navText: [],
      startPosition: slide
   });
};
//---------------------tab active init
function tabInit(tabactive){
   var $navtabs    = $('.nav-tabs');
   var $tabcontent = $('.tab-content');

   switch (tabactive){
      case 'director':
         $navtabs.find('li').eq(0).addClass('active');
         $tabcontent.find('.tab-pane').eq(0).addClass('in active');
         break;
      case 'coach':
         $navtabs.find('li').eq(1).addClass('active');
         $tabcontent.find('.tab-pane').eq(1).addClass('in active');
         break;
      case 'player':
         $navtabs.find('li').eq(2).addClass('active');
         $tabcontent.find('.tab-pane').eq(2).addClass('in active');
         break;
      default:
         break;
   }

}

//--------------------init function

function init(curSlide, tabactive){
   playersInit(curSlide, tabactive);
   directorsInit();
   coachInit(curSlide, tabactive);

   tabInit(tabactive);
}


module.exports.players = init;