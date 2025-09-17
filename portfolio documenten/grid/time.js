const getCurrentTimeDate = () => {
	let currentTimeDate = new Date();
	var weekday = new Array(7);
	weekday[0] = "Zondag";
	weekday[1] = "Maandag";
	weekday[2] = "Dinsdag";
	weekday[3] = "Woensdag";
	weekday[4] = "Donderdag";
	weekday[5] = "Vrijdag";
	weekday[6] = "Zaterdag";

	var month = new Array();
	month[0] = "Januari";
	month[1] = "Februari";
	month[2] = "Maart";
	month[3] = "April";
	month[4] = "Mei";
	month[5] = "Juni";
	month[6] = "Juli";
	month[7] = "Augustus";
	month[8] = "September";
	month[9] = "Oktober";
	month[10] = "November";
	month[11] = "December";

	var hours = currentTimeDate.getHours();

	var minutes = currentTimeDate.getMinutes();
	minutes = minutes < 10 ? "0" + minutes : minutes;

	var currentTime = `${hours}:${minutes}`;
	var currentDay = weekday[currentTimeDate.getDay()];

	var currentDate = currentTimeDate.getDate();
	var currentMonth = month[currentTimeDate.getMonth()];
	var CurrentYear = currentTimeDate.getFullYear();

	var fullDate = `${currentDate} ${currentMonth} ${CurrentYear}`;

	document.getElementById("time").innerHTML = currentTime;

	setTimeout(getCurrentTimeDate, 500);
};
getCurrentTimeDate();