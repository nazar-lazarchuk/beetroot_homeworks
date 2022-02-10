// Modal window

// container
const mainContainer = document.createElement('div');
mainContainer.id = 'modal-window__container';
document.body.prepend(mainContainer);
mainContainer.style.padding = "20px";

// 'open' btn
let btnOpen = document.createElement('button');
btnOpen.id = 'open-button';
btnOpen.innerHTML = 'Open! Push me!!!';
mainContainer.appendChild(btnOpen);

let br = document.createElement('br');
mainContainer.appendChild(br);

// modal window & elements

const modalWindow = document.createElement('div');
modalWindow.id = 'modal-window';
modalWindow.style.paddingTop = "20px";
modalWindow.style.display = "none";
mainContainer.appendChild(modalWindow);

const modalWindowImg = document.createElement('img');
modalWindowImg.id = 'modal-window__img';
modalWindowImg.src = 'https://i.kym-cdn.com/entries/icons/facebook/000/004/687/mario-princess-another-castle.jpg';
modalWindow.appendChild(modalWindowImg);

const modalWindowText = document.createElement('p');
modalWindowText.id = 'modal-window__text';
modalWindowText.innerHTML = 'Sorry, Mario! But our princess is in another castle!';
modalWindow.appendChild(modalWindowText);

const modalWindowCloseBtn = document.createElement('button');
modalWindowCloseBtn.id = 'modal-window__close-btn';
modalWindowCloseBtn.innerHTML = 'Try again!';
modalWindow.appendChild(modalWindowCloseBtn);

// Functions to show/hide modal window

document.getElementById('open-button').addEventListener('click', (e) => {
    e.preventDefault();
    modalWindow.style.display = "block";
    btnOpen.style.display = "none";
});

document.getElementById('modal-window__close-btn').addEventListener('click', (e) => {
    e.preventDefault();
    modalWindow.style.display = "none";
    btnOpen.style.display = "block";
});