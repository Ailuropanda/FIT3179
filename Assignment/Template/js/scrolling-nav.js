(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  $("#PopulationButton").on("click",function(){
    $("#PopulationButton").hide()
    $("#IncomeButton").show()
    $("#PovertyButton").show()
    $("#UnemploymentButton").show()

    $("#population_chloropleth").show()
    $("#income_chloropleth").hide()
    $("#poverty_chloropleth").hide()
    $("#unemployment_chloropleth").hide()

  })
  $("#IncomeButton").on("click",function(){
    $("#PopulationButton").show()
    $("#IncomeButton").hide()
    $("#PovertyButton").show()
    $("#UnemploymentButton").show()

    $("#population_chloropleth").hide()
    $("#income_chloropleth").show()
    $("#poverty_chloropleth").hide()
    $("#unemployment_chloropleth").hide()

  })

  $("#PovertyButton").on("click",function(){
    $("#PopulationButton").show()
    $("#IncomeButton").show()
    $("#PovertyButton").hide()
    $("#UnemploymentButton").show()

        $("#population_chloropleth").hide()
    $("#income_chloropleth").hide()
    $("#poverty_chloropleth").show()
    $("#unemployment_chloropleth").hide()

  })

  $("#UnemploymentButton").on("click",function(){
    $("#PopulationButton").show()
    $("#IncomeButton").show()
    $("#PovertyButton").show()
    $("#UnemploymentButton").hide()

        $("#population_chloropleth").hide()
    $("#income_chloropleth").hide()
    $("#poverty_chloropleth").hide()
    $("#unemployment_chloropleth").show()

  })


})(jQuery); // End of use strict
