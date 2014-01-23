$(function() {
	$.typer.options.typerInterval = 3500;
	$.typer.options.clearDelay = 750;
	$.typer.options.typeSpeed = 100;
	$.typer.options.tapeColor = "#383838"
	$(".typer").typer();

  	githubStars("stretchr", function(stars) {
  		$(".github-stars").html(stars);
  	});

  	$(window).on("scroll", function(e) {
  		if ($(this).scrollTop() > ($("#future-proof").offset().top - 400)) {
  			$("#future-proof .animation").addClass("active");
  		}
		if ($(this).scrollTop() > ($(".permissions-animation").offset().top - 400)) {
			$(".permissions-animation").addClass("active");
			$(window).off("scroll");
		}
	});

});
