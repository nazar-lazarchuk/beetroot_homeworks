//1
const changeText = document.getElementById('text');
const textarea = document.getElementById('edit');
textarea.style.display = 'none';

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.code === 'KeyE') {        
        e.preventDefault();
        changeText.style.display = 'none';
        textarea.style.display = 'block';
        textarea.value = changeText.innerText;
    }
});

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.code === 'Equal') {        
        e.preventDefault();
        changeText.style.display = 'block';
        textarea.style.display = 'none';
        changeText.innerText = textarea.value;
    }
});

//2
const tbody = document.querySelector('tbody');
const rows = [...tbody.querySelectorAll('tr')];
const columns = [...document.querySelectorAll('th')];

for (let column of columns) {
    column.addEventListener('click', sortTable);
}

function sortTable() {
    let i = columns.indexOf(this);
    rows.sort((a, b) => a.cells[i].innerText > b.cells[i].innerText ? 1 : -1) ;
    for (let row of rows) tbody.appendChild(row);
}
















const el = document.querySelector(".item");

const resizers = document.querySelectorAll(".resize");
let currentResizer;

for (let resizer of resizers) {
  resizer.addEventListener("mousedown", mousedown);

  function mousedown(e) {
    currentResizer = e.target;
    isResizing = true;

    let prevX = e.clientX;
    let prevY = e.clientY;

    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    function mousemove(e) {
      const rect = el.getBoundingClientRect();

      if (currentResizer.classList.contains("se")) {
        el.style.width = rect.width - (prevX - e.clientX) + "px";
        el.style.height = rect.height - (prevY - e.clientY) + "px";
      } else if (currentResizer.classList.contains("sw")) {
        el.style.width = rect.width + (prevX - e.clientX) + "px";
        el.style.height = rect.height - (prevY - e.clientY) + "px";
        el.style.left = rect.left - (prevX - e.clientX) + "px";
      } else if (currentResizer.classList.contains("ne")) {
        el.style.width = rect.width - (prevX - e.clientX) + "px";
        el.style.height = rect.height + (prevY - e.clientY) + "px";
        el.style.top = rect.top - (prevY - e.clientY) + "px";
      } else {
        el.style.width = rect.width + (prevX - e.clientX) + "px";
        el.style.height = rect.height + (prevY - e.clientY) + "px";
        el.style.top = rect.top - (prevY - e.clientY) + "px";
        el.style.left = rect.left - (prevX - e.clientX) + "px";
      }

      prevX = e.clientX;
      prevY = e.clientY;
    }

    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
      isResizing = false;
    }
  }
}