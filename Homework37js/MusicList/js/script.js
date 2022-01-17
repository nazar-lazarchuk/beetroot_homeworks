const playList = [
  {
   author: "LED ZEPPELIN",
   song:"STAIRWAY TO HEAVEN"
  },
  {
   author: "QUEEN",
   song:"BOHEMIAN RHAPSODY"
  },
  { 
   author: "LYNYRD SKYNYRD",
   song:"FREE BIRD"
  },
  {
   author: "DEEP PURPLE",
   song:"SMOKE ON THE WATER"
  },
  {
   author: "JIMI HENDRIX",
   song:"ALL ALONG THE WATCHTOWER"
  },
  {
   author: "AC/DC",
   song:"BACK IN BLACK"
  },
  {
   author: "QUEEN",
   song:"WE WILL ROCK YOU"
  },
  {
   author: "METALLICA",
   song:"ENTER SANDMAN"
  }
  ];

const out = document.getElementById('out')

const list = [];
playList.forEach(function(music) {
  const {author,song} = music;
  list.push(`
  Author : ${author} 
  Song : ${song}
  `);
});



let ul = document.createElement('ol');
out.appendChild(ul);
for (let i = 0; i < list.length; i++){
  let li = document.createElement('li');
  li.innerHTML = list[i];
  ul.appendChild(li);
}
console.log(list)
