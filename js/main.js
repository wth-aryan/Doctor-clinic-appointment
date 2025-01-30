// Header Scroll 
let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 100){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// nav hide  
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

document.addEventListener("DOMContentLoaded", function() {
    const scheduleButton = document.getElementById('scheduleButton');

    scheduleButton.addEventListener('click', function() {
        daySchedule.initPopupWidget({
            url: 'https://draryan.dayschedule.com'
        });
    });
});

