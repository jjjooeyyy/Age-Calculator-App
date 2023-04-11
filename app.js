'use strict'
const dayLabel = document.getElementById('dayLabel');
const monthLabel = document.getElementById('monthLabel');
const yearLabel = document.getElementById('yearLabel');

const dayInput = document.getElementById('dayInput');
const monthInput = document.getElementById('monthInput');
const yearInput = document.getElementById('yearInput');

const btn = document.getElementById('btn');

const yearOutput = document.getElementById('year-output');
const monthOutput = document.getElementById('month-output');
const dayOutput = document.getElementById('day-output');

const errorYear = document.getElementById('errorYear');
const errorMonth = document.getElementById('errorMonth');
const errorDay = document.getElementById('errorDay');

let years,months,days = '';

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let currentDay = new Date().getDate();

const errorMsg = ["","This field is required","Must be a valid day","Must be a valid month",`Must be a year between 1990 and ${currentYear}`]

// CHECK VALID YEAR 
function checkValidYear() {
    if(yearInput.value == '') {
        console.log('no year');
        yearInput.style.border = "1px solid red";
        yearLabel.style.color = "red";
        errorYear.innerHTML = errorMsg[1];
       }
    else if(yearInput.value<1990 || yearInput.value>currentYear) {
    console.log('invalid year');
    yearInput.style.border = "1px solid red";
   yearLabel.style.color = "red";
   errorYear.innerHTML = errorMsg[4];
   }
    else {
        console.log('valid');
        errorYear.innerHTML = errorMsg[0];
        yearInput.style.border = "1px solid hsl(0, 1%, 44%)";
        yearLabel.style.color = "hsl(0, 1%, 44%)";
    }
}

yearInput.addEventListener('input',checkValidYear);

// CHECK VALID MONTH
function checkValidMonth() {
    if(monthInput.value == '') {
        console.log('no month');
        monthInput.style.border = "1px solid red";
        monthLabel.style.color = "red";
        errorMonth.innerHTML = errorMsg[1];
    }
    else if(monthInput.value<1 || monthInput.value>12) {
        console.log('invalid month');
        monthInput.style.border = "1px solid red";
        monthLabel.style.color = "red";
        errorMonth.innerHTML = errorMsg[3];
    } 
    else {
        console.log('valid');
        errorMonth.innerHTML = errorMsg[0];
        monthInput.style.border = "1px solid hsl(0, 1%, 44%)";
        monthLabel.style.color = "hsl(0, 1%, 44%)";
    }
}

monthInput.addEventListener('input',checkValidMonth);

// CHECK VALID DAY
function checkValidDay() {
    if(dayInput.value =='') {
        console.log('no day');
        dayInput.style.border = "1px solid red";
        dayLabel.style.color = "red";
        errorDay.innerHTML = errorMsg[1];
    } 
    else if(dayInput.value<1 || dayInput.value>31) {
        console.log('invalid day');
        dayInput.style.border = "1px solid red";
        dayLabel.style.color = "red";
        errorDay.innerHTML = errorMsg[2];
    }
    else {
        console.log('valid');
        dayInput.style.border = "1px solid hsl(0, 1%, 44%)";
        dayLabel.style.color = "hsl(0, 1%, 44%)";
        errorDay.innerHTML = errorMsg[0];
    }
}

dayInput.addEventListener('input',checkValidDay);

/* const calAge = function() {
    const dayInput = Number(document.getElementById('#dayInput').value);
    const monthInput = Number(document.getElementById('#monthInput').value);
    const yearInput = Number(document.getElementById('#yearInput').value);

    years = Currentyear-yearInput;
    console.log(years);
}

calAge(); */

