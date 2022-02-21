// Допрацювати код минулого домашнього завдання зі списком пісень. 
// Створити форму додавання пісень, при натисканні на кнопку «додати пісню»
// вона додається на сторінку. Кожна додана пісня має мати кнопку видалити, 
// при натисканні на неї відповідна пісня має бути видалена, із масива та сторінки.

let songList = document.querySelector('.song-list');
let ol = document.createElement("ol");
songList.append(ol);

let playList = [
   {
      author: "LED ZEPPELIN",
      song: "STAIRWAY TO HEAVEN"
   },
   {
      author: "QUEEN",
      song: "BOHEMIAN RHAPSODY"
   },
   {
      author: "LYNYRD SKYNYRD",
      song: "FREE BIRD"
   },
   {
      author: "DEEP PURPLE",
      song: "SMOKE ON THE WATER"
   },
   {
      author: "JIMI HENDRIX",
      song: "ALL ALONG THE WATCHTOWER"
   },
   {
      author: "AC/DC",
      song: "BACK IN BLACK"
   },
   {
      author: "QUEEN",
      song: "WE WILL ROCK YOU"
   },
   {
      author: "METALLICA",
      song: "ENTER SANDMAN"
   }
];

for (let i = 0; i < playList.length; i++) {
   let li = document.createElement('li');
   li.innerText = `${playList[i].author}: ${playList[i].song}`
   ol.append(li);

   let btnDelete = document.createElement('button');
   li.appendChild(btnDelete).textContent = "Удалить";
   btnDelete.addEventListener('click', deleteParentElement = () => {
      btnDelete.parentElement.remove()
   });
}

let songwriter = document.querySelector('.songwriter');
let songTitle = document.querySelector('.song-title');
let btnAdd = document.querySelector('.btn-add');



function creatNewBlock() {
   songwriter.style.display = 'block';
};
btnAdd.addEventListener('click', creatNewBlock)


function createNewSong() {
   let newAuthor = songwriter.value;
   let newSong = songTitle.value;

   let li = document.createElement('li');
   li.innerText = `${newAuthor.toUpperCase()}: ${newSong.toUpperCase()}`;
   ol.appendChild(li);

   let btnDelete = document.createElement('button');
   li.appendChild(btnDelete).textContent = "Удалить";
   btnDelete.addEventListener('click', deleteParentElement = () => {
      btnDelete.parentElement.remove()
   });
};
btnAdd.addEventListener('click', createNewSong);