//1
const buttonOpen = document.getElementById("buttonOpen");
const buttonClose = document.getElementById("buttonClose");
const modalWindow = document.getElementById("modalWindow");
document.getElementById("modalWindow").style.display = "none";

buttonOpen.onclick = function () {
    document.getElementById("modalWindow").style.display = "";
};
buttonClose.onclick = function () {
    document.getElementById("modalWindow").style.display = "none";
};
window.onclick = function(e) {
    if (e.target === modalWindow) {
        modalWindow.style.display = "none";
    }
};


//2
const list = document.getElementById("demo");

buttonAdd.onclick = function () {
  let bandName = document.getElementById("bandName").value;
  let songName = document.getElementById("songName").value;
  let entry = document.createElement("li");
  let btnClose = document.createElement("button");
  btnClose.id = 'btnClose';
  btnClose.onclick = function () {
    alert("btn");
  };
  btnClose.textContent = "Видалити";
  list.appendChild(btnClose);
  btnClose.onclick = () => {
    btnClose.nextSibling.remove();
    btnClose.remove();
};
  entry.appendChild(document.createTextNode(bandName + " - " + songName));
  list.appendChild(entry);
};
