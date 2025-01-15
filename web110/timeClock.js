// <!-- Jeremy Calhoun -->
// <!-- WEB110-N851 -->
// <!-- Project Part 2-->


"use strict";

// Send an alert using JavaScript
window.alert("It's coffee time!!");


runClock();
//Delay one command or run a command at a specified interval
setInterval("runClock()", 1000);


/* Create and call a JavaScript function that keeps track of the current day and time
Include a countdown function*/
function runClock() {

	//Store the current date and time
	const currentDay = new Date();
	const dateStr = currentDay.toLocaleDateString();
	const timeStr = currentDay.toLocaleTimeString();


	//display the current date and time
	document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

	// Calculate the days until Christmas
	const christmasDay = new Date("December 25, 2024");
	const timeLeft = christmasDay - currentDay;

	// Calculate the number of days, hours, minutes, and seconds left
	//Use a Math method
	const daysLeft = Math.floor(timeLeft/(1000*60*60*24));
	const hrsLeft = currentDay.getHours();
	const minsLeft = currentDay.getMinutes();
	const secsLeft = currentDay.getSeconds();

	//Display the time left until Christmas
	document.getElementById("days").textContent = daysLeft;
	document.getElementById("hrs").textContent = 23 - hrsLeft;
	document.getElementById("mins").textContent = 59 - minsLeft;
	document.getElementById("secs").textContent = 59 - secsLeft;
}