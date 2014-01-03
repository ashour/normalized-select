jQuery(function($) {
  var classes = {
    container:  'us-container',
    overlay:    'us-overlay',
    icon:       'fa fa-chevron-down'
  };

  // add the overlays and move the text and icon into them
  // and ensure that the overlay text changes when an option is selected
  var $containers = $('.'+classes.container);
  $containers.each(function () {
    var $this = $(this);

    $this.append(' <i class="'+classes.icon+'"></i>');

    $this.append('<div class="'+classes.overlay+'"></div>');
    var overlay = $('.'+classes.overlay, this).text($('label', this).text());

    $('select', this).change(function () {
      var $this = $(this);
      $('.'+classes.overlay, $this.parent()).text($('option:selected', this).text());
    });
  });
}(jQuery));