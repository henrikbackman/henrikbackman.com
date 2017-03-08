'use strict';

var HB = HB || {};

HB.main = function() {
  var itemLength = $('.item').length,
      expandInterval = 60,
      isAnimating = false;

  var setupToggle = function() {
    $('.item').each(function() {
      setContainerData($(this), false);
    });
  };

  var setContainerData = function($el, state) {
    $el.data('expanded', state);
  };

  var toggleInfo = function() {
    var btn = $('.toggle-info'),
        $this, $container;

    btn.on('click', function(e) {
      $this = $(e.target);
      $container = $this.parents('.item');

      $this.toggleClass('visible');

      if ($container.data('expanded')) {
        setContainerData($container, false);
      } else {
        setContainerData($container, true);
      }
    });
  };

  var toggleAllInfo = function() {
    var btn = $('#toggle-all'),
        isExpanded = false;

    btn.on('click', function(e) {
      if (isAnimating) {
        return;
      }

      isAnimating = true;

      if (isExpanded) {
        isExpanded = false;
        collapseAll(btn, isExpanded);
      } else {
        isExpanded = true;
        expandAll(btn, isExpanded);
      }
    });
  };

  var collapseAll = function(btn, state) {
    var i = itemLength - 1;

    updateButton(btn, state);
    collapseItem(i, state);
  };

  var expandAll = function(btn, state) {
    var i = 0;

    updateButton(btn, state);
    expandItem(i, state);
  };

  var updateButton = function(btn, state) {
    if (state) {
      $('span', btn).text(btn.data('expanded')).addClass('expanded');
      btn.addClass('expanded');
    } else {
      $('span', btn).text(btn.data('collapsed')).removeClass('expanded');
      btn.removeClass('expanded');
    }
  };

  var collapseItem = function(i, state) {
    var $item = $('.item').eq(i);

    if ($item.length && $item.data('expanded')) {
      setContainerData($item, state);
      updateItem($item);

      setTimeout(function() {
        collapseItem(i - 1, state);
      }, expandInterval);
    } else if ($item.length && !$item.data('expanded')) {
      collapseItem(i - 1, state);
    } else {
      isAnimating = false;
    }
  };

  var expandItem = function(i, state) {
    var $item = $('.item').eq(i);

    if ($item.length && !$item.data('expanded')) {
      setContainerData($item, state);
      updateItem($item);

      setTimeout(function() {
        expandItem(i + 1, state);
      }, expandInterval);
    } else if ($item.length && $item.data('expanded')) {
      expandItem(i + 1, state);
    } else {
      isAnimating = false;
    }
  };

  var updateItem = function($el) {
    $('.toggle-info', $el).toggleClass('visible');
  };

  return {
    init: function() {

      setupToggle();
      toggleInfo();
      toggleAllInfo();

    }
  };
}();

$(document).ready(HB.main.init);
