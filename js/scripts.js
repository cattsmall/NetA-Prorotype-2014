$( "#reaction-chart-toggle" ).click(function() {
  $( "#reaction-chart" ).slideToggle( "fast" );
  if ($(this).find("span").text() == "Show reaction chart") {
    $(this).find("span").text("Hide reaction chart");
    $(this).find(".ss-icon").text("directup");
    
    // Animations
    setTimeout(function() {
      $( ".reactions li .progress .progress-bar.omg-bar" ).css( "height", "50%" );
    }, 100);

    setTimeout(function() {
      $( ".reactions li .progress .progress-bar.ftw-bar" ).css( "height", "3%" );
    }, 200);

    setTimeout(function() {
      $( ".reactions li .progress .progress-bar.why-bar" ).css( "height", "" );
    }, 300);

    setTimeout(function() {
      $( ".reactions li .progress .progress-bar.win-bar" ).css( "height", "22%" );
    }, 400);

    setTimeout(function() {
      $( ".reactions li .progress .progress-bar.wtf-bar" ).css( "height", "5%" );
    }, 500);
  }
  
  else {
    $(this).find("span").text("Show reaction chart");
    $(this).find(".ss-icon").text("dropdown");
    
    $( ".reactions li .progress .progress-bar" ).css( "height", "" );
  }
});

$( ".video-interactions .share-options .reactions .btn" ).click(function() {
  $( this ).toggleClass( "btn-danger" );
});

$('.carousel').carousel();

// Set video height to .5625* the width
$("#video-object").height($("#video-object").width() * .5625);

$(window).resize(function() {
  $("#video-object").height($("#video-object").width() * .5625);
});
