'use strict';

var HB = HB || {};

HB.main = function() {

  var _setScroll = function() {
    $('html, body').scrollTop($('.header').outerHeight());
  };

  var _readMore = function() {
    $('.read-more').on('click', function() {
      $(this).parents('.item:first').addClass('show-info');
    });
  };

  var _readLess = function() {
    $('.read-less').on('click', function() {
      $(this).parents('.item:first').removeClass('show-info');
    });
  };

  return {
    init: function() {

      _setScroll();
      _readMore();
      _readLess();

      console.log('Hi!');

    }
  };
}();

$(document).ready(HB.main.init);
