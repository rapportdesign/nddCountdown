// JavaScript Document

switch (new Date().getDay()) {
    case 0: // Sunday
        nddCountdownWeekend();
        break;
    case 1: // Monday
        nddCountdown();
        break;
    case 2: // Tuesday
        nddCountdown();
        break;
    case 3: // Wednesday
        nddCountdown();
        break;
    case 4: // Thursday
        nddCountdown();
        break;
    case 5: // Friday
        nddCountdownWeekend();
        break;
    case 6: // Saturday
        nddCountdownWeekend();
}

function nddCountdown() {
    "use strict";
    document.getElementById("outputTest").innerHTML = "Weekday";
}

function nddCountdownWeekend() {
    "use strict";
    document.getElementById("outputTest").innerHTML = "Weekday";
}

