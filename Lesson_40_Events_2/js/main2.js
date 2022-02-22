// A rubber window

const mainContainer3 = document.createElement('div');
mainContainer3.id = 'main-container3';
mainContainer3.style.margin = '20px';
mainContainer3.style.width = '300px';
mainContainer3.style.height = '200px';
mainContainer3.style.border = '2px solid black';
document.body.appendChild(mainContainer3);

const loremText = document.createElement('span');
loremText.id = 'lorem-text';
loremText.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, est amet ipsa totam sit nihil neque, rerum voluptatem corporis quidem eligendi nam. Unde placeat quas in fugiat, maiores nostrum est?';
mainContainer3.appendChild(loremText);

const elementResize = document.getElementById('main-container3');

let mouseXEnd, mouseYEnd, resizeController;

document.addEventListener('mousedown', (event) => {
    if (event.target === elementResize) {
        resizeController = true;
    };
});

document.addEventListener('mousemove', (event) => {
    if (resizeController = true) {
        mouseXEnd = event.x; 
        mouseYEnd = event.y;
    };
});

document.addEventListener('mouseup', () => {
    resizeController = false;

    const changedWidth = mouseXEnd - elementResize.offsetLeft;
    const changedHeight = mouseYEnd - elementResize.offsetTop;

    if (changedWidth > 0) {elementResize.style.width = `${changedWidth}px`};
    if (changedHeight > 0) {elementResize.style.height = `${changedHeight}px`};
        
    mouseYEnd = null;
    mouseXEnd = null;
});
