

var currentDay = $("#currentDay");
var row = $(".row");
var timeRightColumn = $(".col");
var saveLeftColumn = $("#rightButton")
var today = moment().format("D MMM YYYY");
var thisMoment = moment().format("D MMM YYYY, HH:mm:ss");
var thisHour = moment().format("HH");
var rowTime = document.getElementsByTagName('time')[0].getAttribute('datetime');




console.log(thisHour);
console.log(rowTime);
console.log(thisMoment);
 

currentDay.text("Today's Date is : " + today);


