$(document).ready(function(){
    $(".embolden > li").each(function(){
        $(this).click(function(){
            $(".embolden > li").css('font-weight','normal');
            $(this).css('font-weight','bold');
        });
    });
});

$("#burger").click(toggleNav);

function toggleNav() {
	$(".nav-mobile-items").slideToggle();
}

$("#greenkey").click(toggleKeys);

function toggleKeys() {
	$(".green-key").slideToggle();
}

$(window).resize(hideNav);

function hideNav() {
	var width = $(window).width();

	if (width > 1024) {
		$(".nav-mobile-items").hide();
	}
}