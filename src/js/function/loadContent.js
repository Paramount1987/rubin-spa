var content = require('../data/content');
var contentChange = require('./index');

var team = require('../components/team');
var calendar = require('../components/calendar');
var directors = require('../components/directors');
var coaches = require('../components/coaches');
var players = require('../components/players');
var cups = require('../components/cups');


var init = function(){

   $('body').on('click', '.nav-link, .link-main, .link-back, .item-team__photo', function(e){
      e.preventDefault();
      var contentHtml = $(this).data('link');
      var index = $(this).data('item') || 0;

      switch (contentHtml) {
         case 'main':
            contentChange.contentLoad(content.data[contentHtml]);
            break;
         case 'team':
            contentChange.contentLoad(content.data[contentHtml], team.players);
            break;
         case 'calendar':
            contentChange.contentLoad(content.data[contentHtml], calendar.init);
            break;
         case 'director':
            contentChange.contentLoad(content.data[contentHtml], directors.init, index);
            break;
         case 'coach':
            contentChange.contentLoad(content.data[contentHtml], coaches.init, index);
            break;
         case 'player':
            contentChange.contentLoad(content.data[contentHtml], players.init, index);
            break;
         case 'cups':
            contentChange.contentLoad(content.data[contentHtml], cups.init);
            break;
      }

   });
}

module.exports.init = init;


