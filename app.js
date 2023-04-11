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

let monthValid,dayValid,yearValid = true;

let years,months,days = '';

let currentYear = Number(new Date().getFullYear());
let currentMonth = Number((new Date().getMonth())+1);
let currentDay = Number(new Date().getDate());

const errorMsg = ["","This field is required","Must be a valid day","Must be a valid month",`Must be a year between 1990 and ${currentYear}`]

// CHECK VALID YEAR 
function checkValidYear() {
    if(yearInput.value == '') {
        yearInput.style.border = "1px solid red";
        yearLabel.style.color = "red";
        errorYear.innerHTML = errorMsg[1];
        yearValid = false;
       }
    else if(yearInput.value<1990 || yearInput.value>currentYear) {
       yearInput.style.border = "1px solid red";
       yearLabel.style.color = "red";
       errorYear.innerHTML = errorMsg[4];
       yearValid = false;
   }
    else {
        errorYear.innerHTML = errorMsg[0];
        yearInput.style.border = "1px solid hsl(0, 1%, 44%)";
        yearLabel.style.color = "hsl(0, 1%, 44%)";
    }
}

yearInput.addEventListener('input',checkValidYear);

// CHECK VALID MONTH
function checkValidMonth() {
    if(monthInput.value == '') {
        monthInput.style.border = "1px solid red";
        monthLabel.style.color = "red";
        errorMonth.innerHTML = errorMsg[1];
        monthValid = false;
    }
    else if(monthInput.value<1 || monthInput.value>12) {
        console.log('invalid month');
        monthInput.style.border = "1px solid red";
        monthLabel.style.color = "red";
        errorMonth.innerHTML = errorMsg[3];
        monthValid = false;
    } 
    else {
        errorMonth.innerHTML = errorMsg[0];
        monthInput.style.border = "1px solid hsl(0, 1%, 44%)";
        monthLabel.style.color = "hsl(0, 1%, 44%)";
        monthValid;
    }
}
monthInput.addEventListener('input',checkValidMonth);

// CHECK VALID DAY
function checkValidDay() {
    if(dayInput.value =='') {
        dayInput.style.border = "1px solid red";
        dayLabel.style.color = "red";
        errorDay.innerHTML = errorMsg[1];
        dayValid = false;

    } 
    else if(dayInput.value<1 || dayInput.value>31) {
        dayInput.style.border = "1px solid red";
        dayLabel.style.color = "red";
        errorDay.innerHTML = errorMsg[2];
        dayValid = false;
    }
    else {
        dayInput.style.border = "1px solid hsl(0, 1%, 44%)";
        dayLabel.style.color = "hsl(0, 1%, 44%)";
        errorDay.innerHTML = errorMsg[0];
    }
}

dayInput.addEventListener('input',checkValidDay);

// CALCULATE AGE
function calAge() {
    let inputDay = Number(document.getElementById('dayInput').value);
    let inputMonth = Number(document.getElementById('monthInput').value);
    let inputYear = Number(document.getElementById('yearInput').value);
    let month = [31,28,31,30,31,30,31,31,30,31,30,31];
         
         if(inputDay > currentDay) {
            currentDay = currentDay + month[currentMonth-1];
         }

         if(inputMonth > currentMonth) {
            currentMonth = currentMonth + 12;
            currentYear = currentYear - 1;
         }

         days = currentDay - inputDay;
         months = currentMonth - inputMonth;
         years = currentYear - inputYear;
         console.log(days,months,years);
         yearOutput.innerHTML = years;
         monthOutput.innerHTML = months;
         dayOutput.innerHTML = days;
        }
    



btn.addEventListener('click',checkValidYear);
btn.addEventListener('click',checkValidMonth);
btn.addEventListener('click',checkValidDay);
btn.addEventListener('click',calAge);



/* const calAge = function() {
    const dayInput = Number(document.getElementById('#dayInput').value);
    const monthInput = Number(document.getElementById('#monthInput').value);
    const yearInput = Number(document.getElementById('#yearInput').value);

    years = Currentyear-yearInput;
    console.log(years);
}

calAge(); */

