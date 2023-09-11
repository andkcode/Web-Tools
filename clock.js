const formatSwitchBtn = document.querySelector(".format-switch-btn");

    formatSwitchBtn.addEventListener("click", () => {
        formatSwitchBtn.classList.toggle("active");

        let formatValue = formatSwitchBtn.getAttribute("data-format");

        if (formatValue == "12") {
            formatSwitchBtn.setAttribute("data-format", "24");
        } else {
            formatSwitchBtn.setAttribute("data-format", "12");
        }
    });

    function clock() {
        let today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        let period = "AM";

        if (hours >= 12) {
            period = "PM";
        }

        let formatValue = formatSwitchBtn.getAttribute("data-format");

        if (formatValue === "12") {
            hours = hours > 12 ? hours % 12 : hours;
        }

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        document.querySelector(".hours").innerHTML = hours;
        document.querySelector(".minutes").innerHTML = minutes;
        document.querySelector(".seconds").innerHTML = seconds;
        document.querySelector(".period").innerHTML = period;

        const dotMenuBtn = document.querySelector(".dot-menu-btn");
        const dotMenu = document.querySelector(".dot-menu");

        dotMenuBtn.addEventListener("click", () => {
            dotMenu.classList.toggle("active");

            document.addEventListener("click",(e) => {
        if(e.target.id !== "active-menu"){
            dotMenu.classList.remove("active")
        }
    });
        })
    }  
    let updateClock = setInterval(clock, 1000);