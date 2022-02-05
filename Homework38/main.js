let div = document.createElement("div");

document.body.append(div);
console.log(div); //перевірка

div.className = "musicList";
console.log(div.className); //перевірка

var playList = [
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

let ol = document.createElement("ol");
div.append(ol);
console.log(ol); //перевірка

let showPlayList = () => {
  for (let i = 0; i < playList.length; i++) {
    let li = document.createElement("li");
    li.innerText = `${playList[i].author}: ${playList[i].song}`;
    ol.append(li);
  }
};

showPlayList();
