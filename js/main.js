// JavaScript Document

var cutOffHours = 0;

setInterval(nddCheckStatus, 1000);

function nddCheckStatus() {
	"use strict";	
	
	switch (new Date().getDay()) {
		case 0: // Sunday
			nddCountdownWeekend();
			break;
		case 1: // Monday
			nddCountdownWeekday();
			break;
		case 2: // Tuesday
			nddCountdownWeekday();
			break;
		case 3: // Wednesday
			nddCountdownWeekday();
			break;
		case 4: // Thursday
			nddCountdownWeekday();
			break;
		case 5: // Friday
			nddCountdownFriday();
			break;
		case 6: // Saturday
			nddCountdownWeekend();
	}
}

function nddCountdownWeekday() {
    "use strict";
		var currentDate = new Date();
		var currentHours = currentDate.getHours();
		cutOffHours = 15;
		if (currentHours >= cutOffHours) {
			missedCutOff();
		} else {
			timeRemaining();
		}
}

function nddCountdownFriday() {
    "use strict";
		var currentDate = new Date();
		var currentHours = currentDate.getHours();
		cutOffHours = 13;
		if (currentHours >= cutOffHours) {
			missedCutOff();
		} else {
			timeRemaining();
		}
}

function nddCountdownWeekend() {
    "use strict";
    missedCutOff();
}

function missedCutOff() {
    "use strict";
		document.getElementById("nddCountdownOutput").innerHTML = "<h4>You have now missed the cut off point for next working day delivery.<br/>Any orders placed now will be delivered the following working day.</h4>";
}

function timeRemaining() {
    "use strict";
		var currentDate = new Date();
		var currentHours = currentDate.getHours();
		var currentMinutes = currentDate.getMinutes();
		var currentSeconds = currentDate.getSeconds();
		var hoursRemaining = 0;
		var minutesRemaining = 0;
		var secondsRemaining = 0;
		hoursRemaining = cutOffHours - currentHours;
		if ( (currentMinutes > 0) || (currentSeconds > 0) ) {
			hoursRemaining--;
			if (currentMinutes > 0) {
				minutesRemaining = 60 - currentMinutes;
				if (currentSeconds > 0) {
					secondsRemaining = 60 - currentSeconds;
				}
			} else {
				minutesRemaining = 59;
				secondsRemaining = 60 - currentSeconds;
			}
		}
		if (hoursRemaining < 10) {
			hoursRemaining = hoursRemaining.toString();
			hoursRemaining = "0" + hoursRemaining;
		}
		if (minutesRemaining < 10) {
			minutesRemaining = minutesRemaining.toString();
			minutesRemaining = "0" + minutesRemaining;
		}
		if (secondsRemaining < 10) {
			secondsRemaining = secondsRemaining.toString();
			secondsRemaining = "0" + secondsRemaining;
		}
		document.getElementById("nddCountdownOutput").innerHTML = "<h4>You still have</h4>";
		document.getElementById("nddCountdownOutput").innerHTML += "<div id=\"timeContainer\"><div id=\"hoursOutput\"><span>h</span>" + hoursRemaining + "</div><div id=\"minutesOutput\"><span>m</span>" + minutesRemaining + "</div><div id=\"secondsOutput\"><span>s</span>" + secondsRemaining + "</div></div>";
		document.getElementById("nddCountdownOutput").innerHTML += "<h4>to place your order and to guarantee next day delivery</h4>";
}
