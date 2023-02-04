

var currentDay = $("#currentDay");

var timeRightColumn = $(".col");
var saveLeftColumn = $("#rightButton")
var today = moment().format("D MMM YYYY");
var thisMoment = moment().format("D MMM YYYY, HH:mm:ss");
var thisHour = moment().format("HH:mm");
//var rowTime = document.getElementsByTagName('time')[0].getAttribute('datetime');
var datetime = parseInt($("#datetime").val);



console.log(thisHour); 
//console.log(rowTime);
console.log(thisMoment);
 

currentDay.text("Today's Date is : " + today); //displays today's date on the page


//function to check the time of day and colour each row according to past, present or future.
//function checkTimeOfDay() {
//select all time tags
const row = $(".col-6"); //creates an array of col-6 for adding colour to biggest row element 
console.log(row);





for (let index = 0; index < row.length; index++) {
       
};

console.log (datetime);

/*
if(thisHour === datetime )
row.classList.add("now");
else if (thisHour > tableTime)
row.classList.add("past");
else if (thisHour < tableTime)
row.classList.add("future");


};

*/

//checkTimeOfDay();