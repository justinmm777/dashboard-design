// get the current year
const currentYear = new Date().getFullYear();

// add the current year to html
const year = document.getElementById("year");
year.textContent = currentYear;