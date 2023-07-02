document.querySelector(".c1").addEventListener("click",changeThemeHome);
function changeThemeHome(){
    document.querySelector("body").classList.toggle("theme1-body");
    document.querySelector(".my-container").classList.toggle("theme1-nav");
    document.querySelector(".flip-card-back").classList.toggle("theme1-flip");
    document.querySelector(".home-button").classList.toggle("theme1-homeButton");
    document.querySelector(".btn1").classList.toggle("button-change1");
    document.querySelector(".btn2").classList.toggle("button-change2");
    document.querySelector(".c1").classList.toggle("button-change3");
    document.querySelector(".resume-button").classList.toggle("button-change4");
}