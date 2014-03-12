$( "#reaction-chart-toggle" ).click(function() {
  $( "#reaction-chart" ).slideToggle( "fast" );
  if ($(this).find("span").text() == "Show reaction chart") {
    $(this).find("span").text("Hide reaction chart");
    $(this).find(".ss-icon").text("directup");
  }
  
  else {
    $(this).find("span").text("Show reaction chart");
    $(this).find(".ss-icon").text("dropdown");
  }
});

$('.carousel').carousel();