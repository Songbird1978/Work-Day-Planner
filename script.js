$(document).ready(function () {

    currentDay.text("Today's Date is : " + today); //displays today's date on the page

});

var inputWork = $(".col-6");
var currentDay = $("#currentDay");
var timeLeftColumn = $(".col");
var saveRightColumn = $("#rightButton");
var today = moment().format("D MMM YYYY");
var thisMoment = moment().format("D MMM YYYY, HH:mm:ss");
var thisHour = moment().format("HH");
var saveBtn = $("#rightbutton");


const timeJ = $("#time");

console.log(timeJ);

var rowId = document.getElementById("tableTime").getAttribute("datetime");

var timeNodes = document.querySelectorAll('time');

//

console.log(timeNodes);


//function to check the time of day and colour each row according to past, present or future.
//function checkTimeOfDay() {
//select all time tags

timeNodes.forEach(function (timeNode) {

    console.log(timeNode.dataset.time);

    var hour = timeNode.dataset.time;
    var input = timeNode.parentElement.children[1];

    if (hour === thisHour) {
        console.log("red");
        input.classList.add("now");
    } else if (hour < thisHour) {
        console.log("grey");
        input.classList.add("past");
    } else if (hour > thisHour) {
        console.log("green");
        input.classList.add("future");
    }

});








