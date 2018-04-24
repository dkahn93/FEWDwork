var total = 0;

// +10


$("#a10").click(addTen);

// setTheOutput
// function setOutput() {
//	document.querySelector("#out").innerHTML = total;

//then all we need to do is put setTheOutput() on the last line to replace document.query

function addTen() {
	total = total + 10;

	$("#out").html(total);
}

// +20


$("#a20").click(addTwenty);

function addTwenty() {
	total = total + 20;

	$("#out").html(total);
}

// +30

$("#a30").click(addThirty);

function addThirty() {
	total = total + 30;

	$("#out").html(total);
}

// -10


$("n10").click(subtractTen);

function subtractTen() {
	total = total - 10;

	$("#out").html(total);
}


// -20


$("#n20").click(subtractTwenty);

function subtractTwenty() {
	total = total - 20;

	$("#out").html(total);
}

// -30

var minusThirtyButton = document.querySelector("#n30");

$("#n30").click(subtractThirty);

function subtractThirty() {
	total = total - 30;

	$("#out").html(total);
}

// red

var redButton = document.querySelector("#red");

redButton.onclick = turnRed;

function turnRed() {
	document.querySelector("#out").style.background = "red";
}

// blue

var blueButton = document.querySelector("#blue");

blueButton.onclick = turnBlue;

function turnBlue() {
	document.querySelector("#out").style.background = "blue";
}

// reset

var outputButton = document.querySelector("#out");

outputButton.onclick = reset;

function reset() {
	total = 0;

	document.querySelector("#out").innerHTML = total;
	document.querySelector("#out").style.background = "white";
}

// parseInt(total) "oh you're a total? I'm gonna change you to a number"
// var newTotak = parseInt(total) + 10
// document.querySelector.innerHTML = New Total
