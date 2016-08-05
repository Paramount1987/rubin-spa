var content = require('../data/content');
var contentChange = require('./index');

var team = require('../components/team');
var calendar = require('../components/calendar');
var directors = require('../components/directors');
var coaches = require('../components/coaches');
var players = require('../components/players');
var cups = require('../components/cups');
var cupSingle = require('../components/cupSingle');
var history = require('../components/history');
var glory = require('../components/glory');
var gloryItem = require('../components/gloryItem');

var init = function(){

   $('body').on('click', '.nav-link, .link-main, .link-back, .item-team__photo, .item-cup, .gallery-link', function(e){
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
         case 'cup':
            contentChange.contentLoad(content.data[contentHtml], cupSingle.init, index);
            break;
         case 'history':
            contentChange.contentLoad(content.data[contentHtml], history.init);
            break;
         case 'glory':
            contentChange.contentLoad(content.data[contentHtml], glory.init);
            break;
         case 'gloryItem':
            contentChange.contentLoad(content.data[contentHtml], gloryItem.init, index);
            break;
      }

   });
}

module.exports.init = init;


