$("#burger").click(toggleNav);

function toggleNav() {
	$("#nav-mobile-items").slideToggle();
}


$(window).resize(hideNav);

function hideNav() {
	var width = $(window).width();

	if (width > 1024) {
		$("#nav-mobile-items").hide();
	}

}