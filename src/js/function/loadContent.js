var content = require('../data/content');
var contentChange = require('./index');

var main = require('../components/main');
var team = require('../components/team');
var calendar = require('../components/calendar');
var directors = require('../components/directors');
var coaches = require('../components/coaches');
var players = require('../components/players');
var cups = require('../components/cups');
var cupSingle = require('../components/cupSingle');
var history = require('../components/history');
var historyItem = require('../components/historyItem');
var glory = require('../components/glory');
var gloryItem = require('../components/gloryItem');

var init = function(){

   $('body').on('click', '.nav-link, .link-main, .link-back, .item-team__photo, .item-cup, .gallery-link, .historySlide-link', function(e){
      e.preventDefault();

      var contentHtml = $(this).data('link');
      var index = $(this).data('item') || 0;

      var tabIndex = $(this).data('type') || 'director';

      //history active index slide
      var indexHistory = $(this).data('history-item');

      switch (contentHtml) {
         case 'main':
            contentChange.contentLoad(content.data[contentHtml], main.init);
            break;
         case 'team':
            contentChange.contentLoad(content.data[contentHtml], team.players, index,tabIndex);
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
            index = indexHistory ? indexHistory : index;
            contentChange.contentLoad(content.data[contentHtml], history.init, index);
            break;
         case 'historyItem':
            contentChange.contentLoad(content.data[contentHtml], historyItem.init, index);
            break;   
         case 'glory':
            contentChange.contentLoad(content.data[contentHtml], glory.init, index, null, indexHistory);
            break;
         case 'gloryItem':
            contentChange.contentLoad(content.data[contentHtml], gloryItem.init, index);
            break;
      }

   });
}

module.exports.init = init;


