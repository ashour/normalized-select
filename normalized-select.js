// To reveal that the select element is focused, we style its container
$(function () {
  $(document).
    on('focus', '.ns-select', function () {
      $(this).parent().addClass('ns-focused');
    }).
    on('blur', '.ns-select', function () {
      $(this).parent().removeClass('ns-focused');
    });
});