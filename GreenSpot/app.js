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

$(window).resize(showKey);

function showKey() {
	var width = $(window).width();

	if (width < 1024) {
		$(".green-key").show();
	}
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

// $(document).ready(function(){
//       $(window).scroll(function() { // check if scroll event happened
//         if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
//           $(".navbar-with-title").css("background-color", "rgba(250, 250, 250, 0.7)"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
//         } else {
//           $(".navbar-with-title").css("background-color", "#66FF66"); // if not, change it back to transparent
//         }
//       });
//     });
$(window).scroll(function() {
    if($(this).scrollTop() > 300) {
        $('.navbar-with-title').addClass('opaque');
    } else {
        $('.navbar-with-title').removeClass('opaque');
    }
});