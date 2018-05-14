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

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("contact");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}