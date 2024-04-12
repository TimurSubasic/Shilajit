$(".benefit-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#benefites").offset().top
    }, 300); // Change the duration as needed
  });

  $(".price-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#price").offset().top
    }, 300); // Change the duration as needed
  });

  $("#direct-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#direct-hr").offset().top
    }, 300); // Change the duration as needed
  });

  $("#water-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#water-hr").offset().top
    }, 300); // Change the duration as needed
  });

  $(".use-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#use").offset().top
    }, 300); // Change the duration as needed
  });


  var stickyElement = $('.sticky-element');
  var stickyElementOffset = $("#use").offset().top;

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= stickyElementOffset) {
      stickyElement.addClass('sticky');
      stickyElement.removeClass("gone");
    } else {
      stickyElement.removeClass('sticky');
      stickyElement.addClass("gone");
    }
  });