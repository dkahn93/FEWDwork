var total = 0;

// +10

$("#a10").click(addTen);

function addTen() {

	// wait what's this??
	
	total += 10;

	$("#out").html(total);
}

// +20

$("#a20").click(addTwenty);

function addTwenty() {
	total += 20;

	$("#out").html(total);
}

// +30

$("#a30").click(addThirty);

function addThirty() {
	total += 30;

	$("#out").html(total);
}

// -10

$("#n10").click(subtractTen);

function subtractTen() {
	total -= 10;

	$("#out").html(total);
}

// -20

$("#n20").click(subtractTwenty);

function subtractTwenty() {
	total -= 20;

	$("#out").html(total);
}

// -30

$("#n30").click(subtractThirty);

function subtractThirty() {
	total -= 30;

	$("#out").html(total);
}

// red
$("#red").click(turnRed);

function turnRed() {
	$("#out").css("background-color", "red");
}

// blue

$("#blue").click(turnBlue);

function turnBlue() {
	$("#out").css("background-color", "blue");
}

// reset

$("#out").click(reset);

function reset() {
	total = 0;

	// What's happening here? Sneak preview...

	$("#out").html(total).css("background-color", "white");
}
