var gloryTemplate = require('../../jade/glory');
var dataGlory = require('../data/glory');

 var gloryInit = function(curSlide, tabactive, indexHistory){


    var $glory = $('.owl-carousel--glory');
    $('.wrapper').removeClass('wrapper--history');

    for(var i = 0; i < dataGlory.glory.length; i++){
       $glory.append( gloryTemplate( {'glory': dataGlory.glory[i], 'index': i }  ));
    }

    $glory.owlCarousel({
       loop:true,
       nav:true,
       items: 5,
       dots: false,
       margin:20,
       navText: [],
       smartSpeed: 400,
       startPosition: curSlide
    });

    //---------set index history to data of link
    $('.link-back').attr('data-history-item', indexHistory);
 }


module.exports.init = gloryInit;