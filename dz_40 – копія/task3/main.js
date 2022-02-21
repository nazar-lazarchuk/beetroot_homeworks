const resizeButton = document.getElementById("resizeButton");
const parentBlock = document.getElementById("block")

let resizing = false;
let x = null;
let y = null;

document.addEventListener("mousedown", (event) => {
  if (event.target === resizeButton) {
    resizing = true;
  }
});
document.addEventListener("mouseup", () => {
    const currentHeight = y - parentBlock.offsetTop;
    const currentWidth = x - parentBlock.offsetLeft;
    resizing = false; 
    if (currentHeight > 0) {
        parentBlock.style.height = `${currentHeight}px`;
    }
    if (currentWidth > 0) {
        parentBlock.style.width = `${currentWidth}px`;
    }
});
document.addEventListener("mousemove", (event) => {
  if (resizing) {
    x = event.x;
    y = event.y;
  }
});

