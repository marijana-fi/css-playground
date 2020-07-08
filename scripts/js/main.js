$(document).ready(function () {
	let info = $(".card-closed");
	let text = $(".card-closed p");
	let animation = new TimelineMax();

	info.on("click", function () {
		info.toggleClass("card-open");

		//tweenmax settings

		animation.staggerTo(
			text,
			0.5,
			{
				css: { className: "+=show-text" },
				ease: Power3.easeInOut,
			},
			0.15
		);

		if (info.hasClass("card-open")) {
			animation.restart().play();
		}
	});

	let bookBtn = $(".book");
	let closeBtn = $(".close-btn");
	let card = $(".card-wrap-1");

	bookBtn.on("click", function () {
		card.addClass("expand");
	});

	closeBtn.on("click", function () {
		card.removeClass("expand");
	});
	const checkbox = $("#checkbox");
	const bg = $(".theme-toggle");

	checkbox.on("change", () => {
		bg.toggleClass("dark");
	});

	//sign-in form

	const signIn = $("#signIn");
	const signUp = $("#signUp");
	const container = $(".account-wrap");
	signUp.on("click", function () {
		container.addClass("right-panel-active");
	});

	signIn.on("click", function () {
		container.removeClass("right-panel-active");
	});
});

$(window).on("load", function () {
	// radial progress bar
	function Circlle(el) {
		$(el)
			.circleProgress({
				fill: { color: "#f2c94c" },
				emptyFill: "#f8f8f8",
			})
			.on("circle-animation-progress", function (
				event,
				progress,
				stepValue
			) {
				$(this)
					.find("strong")
					.text(String(stepValue.toFixed(2)).substr(2) + "%");
			});
	}

	//Add class when img.clipped is 40% from top
	$(".dribble-cards").waypoint(
		function (direction) {
			if (direction === "down") {
				Circlle(".round");

				$(".green").circleProgress({
					fill: "#4fb99c",
				});
				$(".purple").circleProgress({
					fill: "#794bdc",
				});
				$(".pink").circleProgress({
					fill: "#cd2d70",
				});

				this.destroy();
			}
		},
		{
			offset: "50%",
		}
	);
});
