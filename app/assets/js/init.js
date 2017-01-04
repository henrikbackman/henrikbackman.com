'use strict';

var HB = HB || {};

HB.main = function() {
  var toggleInfo = function() {
    var btn = $('.toggle-info');

    btn.on('click', function(e) {
      $(e.target).toggleClass('visible');
    });
  };

  return {
    init: function() {

      toggleInfo();

    }
  };
}();

$(document).ready(HB.main.init);
