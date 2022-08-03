// get the current year
const currentYear = new Date().getFullYear();
console.log(currentYear);

// add the current year to html
const year = document.getElementById("year");
year.textContent = currentYear;