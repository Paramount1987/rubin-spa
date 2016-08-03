var nav = {
   navBack: '.nav-backdrop',
   navListSup: '.nav-list-sup',
   navClose: '.js-nav-close',
   navLinkSup: '.js-nav-link-sup',
   init: function(){
      this.openNav();
      this.closeNav();
   },
   openNav: function(){
      var self = this;
      $('body').on('click', self.navLinkSup, function(e){
         e.preventDefault();

          $(self.navBack).fadeIn(100);
          $(self.navListSup).addClass('open');

      });
   },
   closeNav: function(){
      var self = this;
      $('body').on('click', this.navClose, function(){
         $(self.navBack).fadeOut(300);
         $(self.navListSup).removeClass('open');
      });
   }
};

module.exports.nav = nav;
//-----------------------------------------------------