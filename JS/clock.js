/*Analog Clock*/

var date, seconds, secondHand, minutes, minuteHand, hours, hourHand, time;
function clock() {
	date = new Date();
	seconds = date.getSeconds();
	secondHand = document.getElementById("secondHand");
	secondHand.style.transform = "rotate(" + (seconds * 6) + "deg)";
	minutes = date.getMinutes();
	minuteHand = document.getElementById("minuteHand");
	minuteHand.style.transform = "rotate(" + (minutes * 6 + seconds * 0.1) + "deg)";
	hours = date.getHours();
	hourHand = document.getElementById("hourHand");
	hourHand.style.transform = "rotate(" + (hours * 30 + minutes * 0.5) + "deg)";
	time = document.getElementById("time");
	time.innerHTML = hours + ":" + minutes + ":" + seconds;
}
setInterval("clock()", 1000);

