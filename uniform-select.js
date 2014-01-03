jQuery(function($) {
  var classes = {
    container:  'us-container',
    overlay:    'us-overlay',
    icon:       'fa fa-chevron-down'
  };

  // changes the overlay text based on the associated select option
  var setOverlay = function (select) {
    $('.'+classes.overlay, $(select).parent()).text($('option:selected', select).text());
  };

  // add the overlays and move the selected option text and icon into them
  // and ensure that the overlay text changes when an option is selected
  var $containers = $('.'+classes.container);
  $containers.each(function () {
    $(this).append(' <i class="'+classes.icon+'"></i>').
            append('<div class="'+classes.overlay+'"></div>');

    $('select', this).each(function () {
      setOverlay(this);
      $(this).change(function () { setOverlay(this); });
    });
  });
}(jQuery));