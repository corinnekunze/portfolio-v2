$(function() {
	// Navigation Logic
	var navigation = {
		scrollPos: 0,
    hasScrolled: false,
    navHeight: $('.header').outerHeight(),
    topContent: ($('.header').outerHeight() + $('.introduction').outerHeight()),

    init: function() {
    	console.log('initialized!');
      this.watchScroll();
    },

    watchScroll: function() {
      var self = this;
      $(window).on('scroll', function() {
        self.hasScrolled = true;
      });

      setInterval(function() {
        if (self.hasScrolled) {
          self.userScrolled();
          self.hasScrolled = false;
        }
      }, 250);
    },

    userScrolled: function() {
      var curPos = $(window).scrollTop();

      if (Math.abs(this.scrollPos - curPos) <= 5) {
        return;
      }

      if (curPos <= this.topContent) {
        // scroll position in top content area (nav + intro paragraph)
        if (curPos == 0) {
          $('.header').removeClass('up');
          // $('body').css('padding-top', '0');
        }
      }
      else if (curPos > this.scrollPos && curPos > this.navHeight) {
        // scroll down
        $('.header').addClass('inactive').removeClass('up');
      }
      else {
        // scroll up
        $('.header').addClass('up');
      }

      this.scrollPos = curPos;
    },
	};

	if ($('.js-fade').length > 0) {
		$('.js-fade').addClass('is-finished');
	}

	// Initalizers
	navigation.init();
});