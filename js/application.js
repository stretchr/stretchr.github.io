var stretchr = new Stretchr.Client("stretchr", "demo-invite", "d23e580f5cba40b895d331e09197ace2");

$(function() {

	$(".demo-invite").submit(function(e) {
		e.preventDefault();
		var t = $(e.currentTarget),
			d = t.formalizeData();
		stretchr.at("invites").create(d, {
			success: function(response) {
				t.find(".response").html("<div class='alert alert-danger'>Thanks for your interest - a member of our team will contact you within 24 hours to get you signed up</div>");
				t.get(0).reset();
			},
			error: function(response) {
				t.find(".response").html("<div class='alert alert-danger'>Uh oh, looks like there was an issue submitting your request, please try again</div>");
			}
		})
	});

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
