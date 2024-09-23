'use strict';


/** add event */

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for(let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    }else{
        elem.addEventListener(type, callback);
    }
}


/** navtoggle */


const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]")

const togglerNavbar = function () {
navbar.classList.toggle("active");
navToggler.classList.toggle("active");
document.body.classList.toggle("active");
}

addEventOnElem(navToggler, "click" , togglerNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active");
navToggler.classList.remove("active");
document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click" , closeNavbar);


/**header */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
if (window.scrollY > 300) {
header.classList.add("active");
    } else{
        header.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", activeHeader)

/***
 * toggler add to fav
 */

const addToFavBtns = document.querySelectorAll(["data-add-to-fav"]);

const togglerActive = function(){
    this.classList.add(active);
}

addEventOnElem(addToFavBtns, "click", togglerActive);


/* scroll reveal function */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
    for(let i =0; i < sections.length; i++){
if(sections[i].getBoundingClientRect.top < window.innerHeight / 1.5){
    sections[i].classList.add("active");
}else {
    sections[i].classList.remove("active");
}
    }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);