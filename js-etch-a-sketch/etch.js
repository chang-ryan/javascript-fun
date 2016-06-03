function init() {

  $("#thing_container").empty();

  var width = $("input[name$='width']").val();
  var height = $("input[name$='height']").val();
  var side = $("#thing_container").width() / width - 2;
  var amount = width * height;

  for (i = 0; i < amount; i++) {
    $("#thing_container").append('<div class="square"></div>');
  };

  $('.square').css('width', side);
  $('.square').css('height', side);

};

$(document).ready(function() {

  $('#game1').click(function() {
    init();
    $('.square').mouseenter(function() {
      $(this).css('background-color', 'red');
    });
  });

  $('#game2').click(function() {
    init();
    $('.square').mouseenter(function() {
      if ($(this).css('opacity') > 0) {
        var currentOpacity = $(this).css('opacity');
        $(this).css('opacity', currentOpacity - 0.1);
      }
    });
  });

  $('#game3').click(function() {
    init();
    $('.square').hover(
      function() {
        $(this).fadeTo('fast', 0);
      },
      function() {
        $(this).fadeTo('fast', 1);
      });
  });

});
