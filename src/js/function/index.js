//var team = require('./components/team');


var contentChange  = function(newContent, callback, curSlide){

   var $content = $('.content');
   var $wrapper = $('.wrapper');

   $wrapper.animate({
      opacity: 0
   },500, function(){

      $content.html( newContent );
      if(callback)  callback(curSlide);

      $wrapper.animate({opacity: 1},500);

   });

}

module.exports.contentLoad = contentChange;