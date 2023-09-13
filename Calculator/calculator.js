const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button')

buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id =='clear') {
            display.innerText = '';
        } else if (item.id == 'backspace') {
             let string = display.innerText.toString();
             display.innerText = string.substr(0, string.length - 1); 
        } else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == '' && item.id == 'equal' ) {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
     }
})

const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');
let isDark = true;
themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark;
}

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