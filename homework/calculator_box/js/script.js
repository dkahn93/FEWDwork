 var redButton = document.querySelector("#red");
 redButton.onclick = redchangeColor;

 function redchangeColor() {
 var red = "red";
 document.querySelector("#out").style.background = red;
 };

 var blueButton = document.querySelector("#blue");
 blueButton.onclick = bluechangeColor;

 function bluechangeColor() {
 var blue = "blue";
 document.querySelector("#out").style.background = blue;
 }



function calculateNumbers() {
	addTen = document.querySelector("#a10").value;
	addTwenty = document.querySelector("#a20").value;
	addThirty = document.querySelector("#a30").value;

	document.querySelector('#drink-output').innerHTML
}