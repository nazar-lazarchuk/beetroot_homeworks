const openButton = document.querySelector("#openModalWindow");
const closeButton = document.querySelector("#closeModalWindow");
const modalWindow = document.querySelector(".block");
const paragraph = document.querySelector("#paragraph");
const header = document.querySelector("#header");

//Task 1
openButton.onclick = () => {
  modalWindow.style.display = "block";
};

closeButton.onclick = () => {
  modalWindow.style.display = "none";
};

window.onclick = (area) => {
  if (
    area.target === modalWindow ||
    area.target === header ||
    area.target === paragraph
  ) {
    modalWindow.style.display = "none";
  }
};

//Task 2

//MODEL
//MODEL
const addedSongs = document.querySelector("#addedSongs");
const listHtml = document.getElementById("playlist");
let playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

//VIEW
const setDeleteHandler = (button, onSuccess) => {
  button.addEventListener("click", () => {
    button.parentNode.remove();
    onSuccess();
  });
};


const renderAddedSongs = (playList) => {
  listHtml.innerHTML = "";
  for (let index = 0; index < playList.length; index++) {
    const li = document.createElement("LI");
    const labelSinger = document.createElement("LABEL");
    labelSinger.innerText = `${playList[index].author}`;
    const labelSong = document.createElement("LABEL");
    labelSong.innerText = `${playList[index].song}`;
    const buttonDelete = document.createElement("BUTTON");
    buttonDelete.innerText = "Delete";
    const value = playList[index];
    setDeleteHandler(buttonDelete, () => {
      playList.splice(playList.indexOf(value), 1);
    });

    li.append(labelSinger, buttonDelete);
    listHtml.append(li);
  }
};

//CONTROLLER
renderAddedSongs(playList);

const addNewSinger = document.querySelector("#newSinger");
const addNewSongs = document.querySelector("#newSong");
const addNewButton = document.querySelector("#newSongButton");

addNewButton.addEventListener("click", () => {
  if (addNewSinger.value !== "" && addNewSongs.value !== "") {
    playList.push({
      author: addNewSinger.value,
      song: addNewSongs.value,
    });
  }
  addNewSongs.value = "";
  addNewSinger.value = "";
  renderAddedSongs(playList);
});