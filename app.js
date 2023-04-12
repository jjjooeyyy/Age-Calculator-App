"use strict";

///////////////////////////////////////////////////////////////////////// Init Variables /////////////////////////////////////////////////////////////////////////

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

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;
let currentDay = new Date().getDate();

const errorMsg = {
  valid: "",
  empty: "This field is required",
  invalidDay: "Must be a valid day",
  invalidMonth: "Must be a valid month",
  invalidYear: `Must be a year between 1990 and ${currentYear}`,
};

// Destructuring Object
const {valid,empty,invalidDay,invalidMonth,invalidYear} = errorMsg;


////////////////////////////////////////////////////////////// Functions for error displays ////////////////////////////////////////////////////////////////////////

/**************** Invalid Display *********************/

const setInvalidYear = (errorMsg) => {
  yearInput.style.border = "1px solid red";
  yearLabel.style.color = "red"; 
  errorYear.innerHTML = errorMsg;
}

const setInvalidMonth = (errorMsg) => {
  monthInput.style.border = "1px solid red";
  monthLabel.style.color = "red"; 
  errorMonth.innerHTML = errorMsg;
}

const setInvalidDay = (errorMsg) => {
  dayInput.style.border = "1px solid red";
  dayLabel.style.color = "red"; 
  errorDay.innerHTML = errorMsg;
}

/**************** Invalid Display *********************/

const setValidYear = (errorMsg) => {
  errorYear.innerHTML = errorMsg;
  yearInput.style.border = "1px solid hsl(0, 1%, 44%)";
  yearLabel.style.color = "hsl(0, 1%, 44%)";
}

const setValidMonth = (errorMsg) => {
  errorMonth.innerHTML = errorMsg;
  monthInput.style.border = "1px solid hsl(0, 1%, 44%)";
  monthLabel.style.color = "hsl(0, 1%, 44%)";
}

const setValidDay = (errorMsg) => {
  errorDay.innerHTML = errorMsg;
  dayInput.style.border = "1px solid hsl(0, 1%, 44%)";
  dayLabel.style.color = "hsl(0, 1%, 44%)";
}


//////////////////////////////////////////////////////////////////// Input Validation //////////////////////////////////////////////////////////////////////////////

/********* CHECK VALID YEAR ***********/ 

const checkValidYear = () => {

   const yearInputValue = yearInput.value;

   // IF ENTER NOTHING
   if(yearInputValue === "") {
    setInvalidYear(empty);
    return false;
   }

   // IF YEAR IS INVALID
   if(yearInputValue < 1990 || yearInputValue > currentYear) {
    setInvalidYear(invalidYear);
    return false;
   }

   // THE YEAR IS VALID
   setValidYear(valid);
   return true;
};

// Check the above validation while user input
yearInput.addEventListener("input", checkValidYear); 

/********* CHECK VALID MONTH ***********/ 

const checkValidMonth = () => {

  const monthInputValue = monthInput.value;

  // IF NO MONTH INPUT
  if(monthInputValue === "") {
    setInvalidMonth(empty);
    return false;
  }

  // IF MONTH IS INVALID
  if(monthInputValue < 1 || monthInputValue > 12) {
    setInvalidMonth(invalidMonth);
    return false;
  }

  // IF MONTH IS VALID
  setValidMonth(valid);
  return true;
};

// Check the above validation while user input
monthInput.addEventListener("input", checkValidMonth);

/********* CHECK VALID MONTH ***********/ 

const checkValidDay = () => {

  const dayInputValue = dayInput.value;

  // IF DAY EMPTY 
  if(dayInputValue === "") {
    setInvalidDay(empty);
    return false;
  }

  // IF DAY INVALID 
  if(dayInputValue < 1 || dayInputValue > 31) {
    setInvalidDay(invalidDay);
    return false;
  }

  // IF DAY VALID 
    setValidDay(valid);
    return true;
};

// Check the above validation while user input
dayInput.addEventListener("input", checkValidDay);


////////////////////////////////////////////////////////////// Function for error output display ///////////////////////////////////////////////////////////////////

const errorDisplay = () => {
  yearOutput.innerHTML = "--";
  monthOutput.innerHTML = "--";
  dayOutput.innerHTML = "--";
  return;
}

////////////////////////////////////////////////////////////// Function to Calculate Age ///////////////////////////////////////////////////////////////////////////

// CALCULATE AGE
const calAge = () => {

  // Convert type of input value to number 
  let inputDay = Number(dayInput.value);
  let inputMonth = Number(monthInput.value);
  let inputYear = Number(yearInput.value);

   // There must be an input
   if(!inputDay || !inputMonth || !inputYear) {
    errorDisplay();
   }

   // The birth can't be the current day
   else if (
    inputDay >= currentDay &&
    inputMonth >= currentMonth &&
    inputYear >= currentYear
  ) {
    errorDisplay();
  }
  
  // All Input must be valid 
  else if(checkValidDay===false || checkValidMonth===false || checkValidYear===false) {
    errorDisplay();
  }

  // If inputs are valid
  else {
     // Days of month in a year
  let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

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
    const days = currentDay - inputDay;
    const months = currentMonth - inputMonth;
    const years = currentYear - inputYear;

    // Update the HTML
    yearOutput.innerHTML = years;
    monthOutput.innerHTML = months;
    dayOutput.innerHTML = days;
  }
};

////////////////////////////////////////////////////////////////////////// Button Event ////////////////////////////////////////////////////////////////////////////

btn.addEventListener("click", () => {
  if (checkValidYear() && checkValidMonth() && checkValidDay()) {
    calAge();
  }
});



