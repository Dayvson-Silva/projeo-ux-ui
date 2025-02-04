const menu = document.getElementById("menu-active");
const overlay = document.getElementsById("overlay");

 
function showMenu() {
    menu.classList.add("show");
}

function hideMenu() {
    menu.classList.remove("show");
    overlay.classList.remove("show");
}