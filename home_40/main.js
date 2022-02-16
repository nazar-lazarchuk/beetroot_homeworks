//1
const someText = document.getElementById('someText');
const textArea = document.getElementById('textArea');
textArea.style.display = 'none';

document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.code === 'KeyE') {
    e.preventDefault();
    someText.style.display = 'none';
    textArea.style.display = "block";
    textArea.value = someText.innerText;
  }
});

document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.code === 'Equal') {
    e.preventDefault();
    someText.style.display = 'block';
    textArea.style.display = 'none';
    someText.innerText = textArea.value;
  }
});

//2
const tbody = document.querySelector('tbody');
const rows = [...tbody.querySelectorAll('tr')];
const columns = [...document.querySelectorAll('th')];

for (let column of columns) {
  column.addEventListener('click', sortTable);
};

function sortTable() {
  let i = columns.indexOf(this);
  rows.sort((a, b) => a.cells[i].innerText > b.cells[i].innerText ? 1 : -1) ;
  for (let row of rows) tbody.appendChild(row);
};

//3
const someTextArea = document.getElementById('someTextArea');
someTextArea.style.width = '150px';
someTextArea.style.height = '100px';
someTextArea.style.resize = 'both';
