var gloryTemplate = require('../../jade/glory');
var dataGlory = require('../data/glory');

 var gloryInit = function(){

    var $glory = $('.owl-carousel--glory');

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
       smartSpeed: 400
    });

 }


module.exports.init = gloryInit;