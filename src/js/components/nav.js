var nav = {
   navWrap: $('.nav-wrap'),
   navBack: $('.nav-backdrop'),
   navListSup: $('.nav-list-sup'),
   navClose: '.js-nav-close',
   navLink: '.nav-link',
   navLinkSup: 'js-nav-link-sup',
   init: function(){
      this.openNav();
      this.closeNav();
   },
   openNav: function(){
      var self = this;
      this.navWrap.on('click', this.navLink, function(e){
         e.preventDefault();
         if( $(this).hasClass(self.navLinkSup) ){
            self.navBack.fadeIn(100);
            self.navListSup.addClass('open');
         }
      });
   },
   closeNav: function(){
      var self = this;
      this.navWrap.on('click', this.navClose, function(){
         self.navBack.fadeOut(300);
         self.navListSup.removeClass('open');
      });
   }
};

module.exports.nav = nav;
//-----------------------------------------------------