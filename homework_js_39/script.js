let btnOpen = document.querySelector('.btn-open');
let modalWindow = document.querySelector('.modal');
let btnClose = document.querySelector('.btn-close');

btnOpen.onclick = () => {
   modalWindow.style.display = "block";
}

btnClose.onclick = () => {
   modalWindow.style.display = "none";
}

modalWindow.onclick = () => {
   modalWindow.style.display = "none";
};