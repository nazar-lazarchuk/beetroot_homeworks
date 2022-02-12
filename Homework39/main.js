const popup = document.getElementById("modalWindow");
const btnOpen = document.querySelector(".btn-open");
const btnClose = popup.querySelector(".btn-close");

btnOpen.addEventListener("click", (e) => {
  popup.style.display = "block";
  btnOpen.style.display = "none";
});

btnClose.addEventListener("click", (e) => {
  popup.style.display = "none";
  btnOpen.style.display = "block";
});

popup.addEventListener("click", (e) => {
  popup.style.display = "none";
  btnOpen.style.display = "block";
});

let div = document.querySelector(".musicList");

var playList = [
  {
    Author: "LED ZEPPELIN",
    Song: "STAIRWAY TO HEAVEN",
  },
  {
    Author: "QUEEN",
    Song: "BOHEMIAN RHAPSODY",
  },
  {
    Author: "LYNYRD SKYNYRD",
    Song: "FREE BIRD",
  },
  {
    Author: "DEEP PURPLE",
    Song: "SMOKE ON THE WATER",
  },
  {
    Author: "JIMI HENDRIX",
    Song: "ALL ALONG THE WATCHTOWER",
  },
  {
    Author: "AC/DC",
    Song: "BACK IN BLACK",
  },
  {
    Author: "QUEEN",
    Song: "WE WILL ROCK YOU",
  },
  {
    Author: "METALLICA",
    Song: "ENTER SANDMAN",
  },
];

let ol = document.createElement("ol");

div.append(ol);
console.log(ol); //перевірка

let showPlayList = () => {
  ol.innerHTML = "";
  for (let i = 0; i < playList.length; i++) {
    let li = document.createElement("li");
    let btnDelete = document.createElement("button");
    li.innerText = `${playList[i].Author}: ${playList[i].Song}`;
    ol.append(li);
    const index = playList[i];

    li.appendChild(btnDelete).textContent = "delete";

    btnDelete.onclick = () => {
      btnDelete.parentElement.remove();
      playList.splice(playList.indexOf(index), 1);
    };
  }
};

showPlayList();

let addSong = document.createElement("button");
document.body.append(addSong);
addSong.classList.add("addSong");
console.log(addSong.className); //перевірка
addSong.textContent = "add your Song";

let form = document.querySelector(".form");

addSong.onclick = () => {
  form.style.display = "block";
  addSong.style.display = "none";
};


let songAuthor = document.getElementById("author");
let songName = document.getElementById("song");

let send = document.querySelector(".send");

send.addEventListener("click", () => {
  let authorValue = songAuthor.value;
  let songValue = songName.value;

  if (authorValue != "" && songValue != "") {
    playList.push(`
     Author: ${authorValue},
     Song: ${songValue}`);
    showPlayList();
    form.style.display = "none";
    addSong.style.display = "block";
  }
  authorValue = "";
  songValue = "";
});

//у мене тут проблема. не записується введене значення в value
//з інпута. схоже, я взагалі не достукуюся до нього, 
//хоча помилки не видає. 
