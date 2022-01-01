// chapter 31 & 32
var currentDate = new Date();
// document.write("Current Date: " + currentDate);
// document.write("<br />");
// document.write("<br />");
// document.write("get time: " + currentDate.getTime());
// document.write("<br />");
// document.write("<br />");
// document.write("Get full year: " + currentDate.getFullYear());
// document.write("<br />");
// document.write("<br />");
// document.write("get month: " + currentDate.getMonth());
// document.write("<br />");
// document.write("<br />");
// document.write("get day: " + currentDate.getDay());
// document.write("<br />");
// document.write("<br />");
// document.write("get date: " + currentDate.getDate());
// document.write("<br />");
// document.write("<br />");
// document.write("get hourse: " + currentDate.getHours());
// document.write("<br />");
// document.write("<br />");
// document.write("get minutes: " + currentDate.getMinutes());
// document.write("<br />");
// document.write("<br />");
// document.write("get seconds: " + currentDate.getSeconds());
// document.write("<br />");
// document.write("<br />");
// document.write("get milliseconds: " + currentDate.getMilliseconds());
// document.write("<br />");
// document.write("<br />");
// document.write("get timezone offset: " + currentDate.getTimezoneOffset());

// var dayNames = [
//   "Sun", "Mon",  "Tue", "Wed", "Thurs", "Fri", "Sat"
// ];
// var currentDayIndex = currentDate.getDay();
// document.write(currentDayIndex)

// document.write("<br />");
// document.write("<br />");
// document.write("Today is: " + dayNames[currentDayIndex]);
// var monthNames = [
//   "Jan", "Feb",  "March", "April", "May", "June", "July",
//   "Aug", "Sep", "Oct", "Nov", "Dec"
// ];
// var currentMonthIndex = currentDate.getMonth();

// document.write("<br />");
// document.write("<br />");
// document.write("Running month is: " + monthNames[currentMonthIndex]);
// document.write("<br />");
// document.write("<br />");
// document.write("get timezone offset: " + currentDate.toString().split(" "));

// Chapter 33
// var gradDate = new Date(" 31 Dec 2022 12:03:40");
// var gradDate = new Date("Jan 03 2020");
// var gradDate = new Date("01 03 2020"); this is equal to Jan 03 2020
// var gradDate = new Date("03 01 2020"); This is equal to March 01 2020
// var gradDate = new Date("12:20:50"); Invalid Date
// var gradDate = new Date("Dec"); Invalid Date
// var gradDate = new Date("31 2021");  Invalid Date
// var gradDate = new Date("12 2021"); Invalid Date
// var gradDate = new Date("31 Dec"); Dec 31 2001
// var gradDate = new Date("July 21, 1983"); Dec 31 2001
// var gradDate = new Date(1612003635191); Dec 31 2001
// document.write(gradDate);
// document.write("<br />");
// document.write("<br />");
// var gradDate = new Date("31 Dec 2022 12:03:40");
// var currentDate = new Date();

// var msDiff = gradDate.getTime() - currentDate.getTime();

// var day = msDiff / (1000 * 60 * 60 * 24);

// document.write(Math.floor(day) + " days are remaining in graduation");


// Chapter 34
var currentDate = new Date();
// document.write(currentDate);
// document.write("<br />");
// document.write("<br />");
// var updatedDateWithNewYearInMS = currentDate.setFullYear(2006);
// document.write(updatedDateWithNewYearInMS);
// var updatedDateWithNewYearInDateForm = new Date(updatedDateWithNewYearInMS);
// document.write(updatedDateWithNewYearInDateForm);
// document.write("<br />");
// document.write("<br />");
// document.write(new Date(currentDate.setMonth(1)));
// document.write("<br />");
// document.write("<br />");
// Setting fixed hours
// var newHour = currentDate.setHours(5);
// document.write("set Hour: " + newHour);
// document.write("<br />");
// document.write("<br />");
// document.write("New Hour: " + new Date(newHour));
// document.write("<br />");
// document.write("<br />");
// Adding hours
// var hoursTobeAdded = currentDate.getHours() + 2;
// document.write(hoursTobeAdded);
// document.write("<br />");
// var expiry = currentDate.setHours(hoursTobeAdded);
// document.write(expiry);
// document.write("<br />");
// document.write("Expiry: " + new Date(expiry));