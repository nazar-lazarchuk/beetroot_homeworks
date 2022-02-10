//Min
const playList = [
  {author: "LED ZEPPELIN", song:"STAIRWAY TO HEAVEN"},
  {author: "QUEEN", song:"BOHEMIAN RHAPSODY"},
  {author: "LYNYRD SKYNYRD", song:"FREE BIRD"},
  {author: "DEEP PURPLE", song:"SMOKE ON THE WATER"},
  {author: "JIMI HENDRIX", song:"ALL ALONG THE WATCHTOWER"},
  {author: "AC/DC", song:"BACK IN BLACK"},
  {author: "QUEEN", song:"WE WILL ROCK YOU"},
  {author: "METALLICA", song:"ENTER SANDMAN"},
];

let ol = document.createElement('ol');
let li = document.createElement('li');
document.body.prepend(ol);

function showList(){
  for (let i = 0; i < playList.length; i++) {
      let liClon = li.cloneNode();
      let b = document.createElement('b');
      b.innerText = `${playList[i].author} - `;
      liClon.append(b);
      liClon.insertAdjacentText('beforeend', `${playList[i].song}`);
      ol.prepend(liClon);
  } 
}
showList();


