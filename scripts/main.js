var previousScrollY = window.pageYOffset;
window.onscroll = (function() {
	var currentScrollY = window.pageYOffset;
	if (previousScrollY > currentScrollY) {
		$(".header").slideDown("slow");
	} else {
		$(".header").slideUp("fast");
	}
	previousScrollY = window.pageYOffset;
});
