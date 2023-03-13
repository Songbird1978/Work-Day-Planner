//document ready with today's date

$(document).ready(function () {

    currentDay.text("Today's Date is : " + today); //displays today's date on the page


});

//variables

var currentDay = $("#currentDay");
var timeLeftColumn = $(".col");
var today = moment().format("D MMM YYYY");
var thisMoment = moment().format("D MMM YYYY, HH:mm:ss");
var thisHour = moment().format("HH");
const timeJ = $("#time");
var rowId = document.getElementById("tableTime").getAttribute("datetime");
var timeNodes = document.querySelectorAll('time');
var inputNodes = document.querySelectorAll('input');

const storageInput = document.querySelectorAll(".remember");
const text = document.querySelectorAll(".text");
const button = document.querySelectorAll(".saveBtn");



//function to save userInput to local storage for each click of the savebutton

$('.saveBtn').click(function (event) {

    event.preventDefault();

    var text = $(this).siblings(".remember").val;
    var time = $(this).parent("id").val;

    console.log('you clicked me');


    localStorage.setItem(time, text);

});

//function to check the time of day and colour each row according to past, present or future.


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


// button.forEach (function (){


//     addEventListener('click', (event));


// })







// button.addEventListener('click', function(event){

//     event.preventDefault();

// const userInput = text.textContent;

// localStorage.setItem("userInput", userInput);

// console.log(userInput);


// var lastInput = localStorage.getItem('userInput');
// userInput.textContent = lastInput.userInput;

// });







// storageInput.addEventListener("input", info => {
//     text.textContent = info.target.value;
//     console.log (info);

// });



// inputNodes.forEach(function (inputNode) {

//      const saveBtn = document.querySelector('.saveBtn');
//     var userInput = inputNode.parentElement.children[i];

//     saveBtn.addEventListener("click", function (event) {

//          event.preventDefault();


//          if (userInput === "") {
//             console.log('this is empty');
//         } else {
//             console.log(userInput + 'to do');
//         }

//         localStorage.setItem('userInput', );


//     });

// });

// function store() {

// preventDefault();

// var inputItem=$('.remember');
// localStorage.setItem('.remember', inputItem.value);
// console.log('.remember', inputItem.value);

// };




//retrieving data from local storage and displaying on the page.

$("#9 .remember").val(localStorage.getItem("9"));
$("#10 .remember").val(localStorage.getItem("10"));
$("#11 .remember").val(localStorage.getItem("11"));
$("#12 .remember").val(localStorage.getItem("12"));
$("#13 .remember").val(localStorage.getItem("13"));
$("#14 .remember").val(localStorage.getItem("14"));
$("#15 .remember").val(localStorage.getItem("15"));
$("#16 .remember").val(localStorage.getItem("16"));
$("#17 .remember").val(localStorage.getItem("17"));









