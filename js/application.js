$(function() {
	$.typer.options.typerInterval = 3500;
	$.typer.options.clearDelay = 750;
	$.typer.options.typeSpeed = 100;
	$(".typer").typer({
    	"primaryColor": "red"
  	});

  	githubStars("stretchr", function(stars) {
  		$(".github-stars").html(stars);
  	});
});
