function redirectMe(url) {
    window.location = url;
}

/***********************************************************************/
// Header And Button Up
let myButton = document.getElementById("group");
let header = document.getElementById("header");

window.onscroll = function () {
    if (window.pageYOffset >= 500) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
    if (window.pageYOffset >= 200) {
        header.style.position = "sticky";
        header.style.top = "0";
        header.style.zIndex = "5000";
    }
};

myButton.onclick = function () {
    window.scrollTo(0, 0);
}

/***********************************************************************/

let menuDetails = document.querySelector(".menu-details");
let menu = document.querySelector(".main-menue");

menuDetails.onclick = function () {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

/***********************************************************************/

// Progrss Section
let section = document.querySelector("#our-skills");
let spanProgrss = document.querySelectorAll("#our-skills span");

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 300) {
        spanProgrss.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    };
};

/***********************************************************************/

let statsSection = document.querySelector(".stats");
let numStat = document.querySelectorAll(".awesome .number");
let started = false;

window.onscroll = function () {
    if (window.scrollY >= statsSection.offsetTop - 300) {
        if (!started) {
            numStat.forEach((num) => startCount(num));
        }
        started = true;
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal); // قسمتها علشان ينتهوا مع بعض
}
