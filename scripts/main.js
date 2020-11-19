var previousScrollY = window.pageYOffset;
window.onscroll = (function() {
	var currentScrollY = window.pageYOffset;
	if (previousScrollY > currentScrollY) {
		$(".fixedHeader").slideDown("slow");
	} else {
		$(".fixedHeader").slideUp("slow");
	}
	previousScrollY = window.pageYOffset;
});