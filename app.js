"use strict";

const dayLabel = document.getElementById("dayLabel");
const monthLabel = document.getElementById("monthLabel");
const yearLabel = document.getElementById("yearLabel");

const dayInput = document.getElementById("dayInput");
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");

const btn = document.getElementById("btn");

const yearOutput = document.getElementById("year-output");
const monthOutput = document.getElementById("month-output");
const dayOutput = document.getElementById("day-output");

const errorYear = document.getElementById("errorYear");
const errorMonth = document.getElementById("errorMonth");
const errorDay = document.getElementById("errorDay");

let years,
  months,
  days = "";

let currentYear = Number(new Date().getFullYear());
let currentMonth = Number(new Date().getMonth() + 1);
let currentDay = Number(new Date().getDate());

const errorMsg = [
  "",
  "This field is required",
  "Must be a valid day",
  "Must be a valid month",
  `Must be a year between 1990 and ${currentYear}`,
];

// CHECK VALID YEAR
const checkValidYear = () => {
  if (yearInput.value == "") {
    yearInput.style.border = "1px solid red";
    yearLabel.style.color = "red";
    errorYear.innerHTML = errorMsg[1];
    return false;
  } else if (yearInput.value < 1990 || yearInput.value > currentYear) {
    yearInput.style.border = "1px solid red";
    yearLabel.style.color = "red";
    errorYear.innerHTML = errorMsg[4];
    return false;
  } else {
    errorYear.innerHTML = errorMsg[0];
    yearInput.style.border = "1px solid hsl(0, 1%, 44%)";
    yearLabel.style.color = "hsl(0, 1%, 44%)";
    return true;
  }
};
yearInput.addEventListener("input", checkValidYear);

// CHECK VALID MONTH
const checkValidMonth = () => {
  if (monthInput.value == "") {
    monthInput.style.border = "1px solid red";
    monthLabel.style.color = "red";
    errorMonth.innerHTML = errorMsg[1];
    return false;
  } else if (monthInput.value < 1 || monthInput.value > 12) {
    console.log("invalid month");
    monthInput.style.border = "1px solid red";
    monthLabel.style.color = "red";
    errorMonth.innerHTML = errorMsg[3];
    return false;
  } else {
    errorMonth.innerHTML = errorMsg[0];
    monthInput.style.border = "1px solid hsl(0, 1%, 44%)";
    monthLabel.style.color = "hsl(0, 1%, 44%)";
    return true;
  }
};
monthInput.addEventListener("input", checkValidMonth);

// CHECK VALID DAY
const checkValidDay = () => {
  if (dayInput.value == "") {
    dayInput.style.border = "1px solid red";
    dayLabel.style.color = "red";
    errorDay.innerHTML = errorMsg[1];
    return false;
  } else if (dayInput.value < 1 || dayInput.value > 31) {
    dayInput.style.border = "1px solid red";
    dayLabel.style.color = "red";
    errorDay.innerHTML = errorMsg[2];
    return false;
  } else {
    dayInput.style.border = "1px solid hsl(0, 1%, 44%)";
    dayLabel.style.color = "hsl(0, 1%, 44%)";
    errorDay.innerHTML = errorMsg[0];
    return true;
  }
};
dayInput.addEventListener("input", checkValidDay);

// CALCULATE AGE
const calAge = () => {
  let inputDay = Number(document.getElementById("dayInput").value);
  let inputMonth = Number(document.getElementById("monthInput").value);
  let inputYear = Number(document.getElementById("yearInput").value);
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // The birth can't be the current day
  if (
    inputDay >= currentDay &&
    inputMonth >= currentMonth &&
    inputYear >= currentYear
  ) {
    yearOutput.innerHTML = "--";
    monthOutput.innerHTML = "--";
    dayOutput.innerHTML = "--";
  }
  // There must be an input
  else if (inputDay === "" || inputMonth === "" || inputYear === "") {
    yearOutput.innerHTML = "--";
    monthOutput.innerHTML = "--";
    dayOutput.innerHTML = "--";
  }
  // The inputs must be valid according from the above validation function
  else if (
    checkValidDay(dayInput.value) === false ||
    checkValidMonth(monthInput.value) === false ||
    checkValidYear(yearInput.value) === false
  ) {
    yearOutput.innerHTML = "--";
    monthOutput.innerHTML = "--";
    dayOutput.innerHTML = "--";
  }

  // If the inputs are valid
  else {
    // If input day is greater than current date -> add the number of total days of the previous month to current date (Account for difference)
    if (inputDay > currentDay) {
      currentDay += month[currentMonth - 1];
    }

    // If birth month is greater than current month, (YES -> add 12 months and -1 to current month, to account for difference)
    if (inputMonth > currentMonth) {
      currentMonth = currentMonth + 12; // add 12 months
      currentYear -= 1; // -1 month
    }

    // Calculation Part
    days = currentDay - inputDay;
    months = currentMonth - inputMonth;
    years = currentYear - inputYear;

    // Update the HTML
    yearOutput.innerHTML = years;
    monthOutput.innerHTML = months;
    dayOutput.innerHTML = days;
  }
};

// Click event to check inputs and calculate age if valid
btn.addEventListener("click", () => {
  if (checkValidYear() && checkValidMonth() && checkValidDay()) {
    calAge();
  }
});
