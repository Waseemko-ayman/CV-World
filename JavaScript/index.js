function redirectMe(url) {
    window.location = url;
}

/***********************************************************************/

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