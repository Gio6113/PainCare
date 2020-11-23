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
<<<<<<< HEAD
let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
});
=======
>>>>>>> b84d00ab58998bd8914eadb3eae37f8f7fd3c575
