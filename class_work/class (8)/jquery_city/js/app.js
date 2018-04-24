// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked
// $("#first").click(swapBigpics1)
// $("#second").click(swapBigpics2)
// $("#third").click(swapBigpics3)
// $("#fourth").click(swapBigpics4)

// function swapBigpics1() {
// 	$("#bigimage").attr("src", "img/1.jpg");
// 	$(".bgimg").slideIn();
// }
// function swapBigpics2() {
// 	$("#bigimage").attr("src", "img/2.jpg");
// 	$(".bgimg").slideIn();
	
// }
// function swapBigpics3() {
// 	$("#bigimage").attr("src", "img/3.jpg");
// 	$(".bgimg").slideIn();
// }
	
// function swapBigpics4() {
// 	$("#bigimage").attr("src", "img/4.jpg");
// 	$(".bgimg").slideIn();
	
// }


$(".thumb").click(changeImage);

function changeImage(event) {
	var newSrc = $(event.currentTarget).attr("src");
	
	$("#bigimage").attr("src", newSrc)
}