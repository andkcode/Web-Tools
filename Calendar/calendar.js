
const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

console.log(today);

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const allMonths = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"]

date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()]; 
year.innerHTML = today.getFullYear();


document.getElementById("clock").addEventListener("click", function () {
    let oldPageContent = document.documentElement.innerHTML; 
    localStorage.setItem("oldPageContent", oldPageContent); 
    window.location.href = "../Clock/clock.html"; 
});

document.getElementById("calculator").addEventListener("click", function () {
    let oldPageContent = document.documentElement.innerHTML; 
    localStorage.setItem("oldPageContent", oldPageContent); 
    window.location.href = "../Calculator/calculator.html"; 
});

document.getElementById("stopwatch").addEventListener("click", function () {
    let oldPageContent = document.documentElement.innerHTML; 
    localStorage.setItem("oldPageContent", oldPageContent); 
    window.location.href = "../StopWatch/stopwatch.html"; 
});

document.getElementById("calendar").addEventListener("click", function () {
    let oldPageContent = document.documentElement.innerHTML; 
    localStorage.setItem("oldPageContent", oldPageContent); 
    window.location.href = "../Calendar/calendar.html"; 
});