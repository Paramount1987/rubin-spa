
var contentChange  = function(newContent, callback, curSlide, curTab, indexHistory){

   var $content = $('.content');
   var $wrapper = $('.wrapper');

   $wrapper.animate({
      opacity: 0
   },300, function(){

      $content.html( newContent );
      if(callback)  callback(curSlide, curTab, indexHistory);

      setTimeout(function(){$wrapper.animate({opacity: 1},500)},300);

      //----------------------------------scrollpane
      $('.scroll-pane').jScrollPane();
         
   });

}

module.exports.contentLoad = contentChange;