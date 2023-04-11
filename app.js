'use strict'

const dayInput = document.querySelector('#dayInput');
const monthInput = Number(document.querySelector('#monthInput'));
const yearInput = Number(document.querySelector('#yearInput'));
const btn = document.querySelector('#btn');
const yearOutput = document.querySelector('#year-output');
const monthOutput = document.querySelector('#month-output');
const dayOutput = document.querySelector('#day-output');

let years,months,days = '';

let currentYear = new Date().getFullYear();


let currentMonth = new Date().getMonth();


let currentDay = new Date().getDate();


const errorMsg = ["","This field is required","Must be a valid day","Must be a valid month","`Must be a year between 1990 and ${currentYear}`"]

function checkValid() {
    let isValid;
    const inputField = [

    ]
}
/* const calAge = function() {
    const dayInput = Number(document.querySelector('#dayInput').value);
    const monthInput = Number(document.querySelector('#monthInput').value);
    const yearInput = Number(document.querySelector('#yearInput').value);

    years = Currentyear-yearInput;
    console.log(years);
}

calAge(); */


btn.addEventListener('click',function() {
    
})