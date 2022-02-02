let popup = document.getElementById("myPopup");
let btnOpen = document.getElementById("btn");
let btnClose = document.querySelector(".close");


btnOpen.onclick = function () {
    popup.style.display = "block";
}

btnClose.onclick = function () {
    popup.style.display = "none";
}
window.onclick = function(e) {
    if (e.target == popup) {
        popup.style.display = "none"
    }
}