jQuery(function($) {
  var classes = {
    container:  'us-container',
    overlay:    'us-overlay',
    icon:       'fa fa-chevron-down'
  };

  // add the overlays and move the text and icon into them, and add the click handlers
  var $containers = $('.'+classes.container);
  $containers.each(function () {
    $(this).append('<div class="'+classes.overlay+'"></div>');

    var overlay = $('.'+classes.overlay, this).text($('label', this).text());
    overlay.append(' <i class="'+classes.icon+'"></i>');
  });
}(jQuery));