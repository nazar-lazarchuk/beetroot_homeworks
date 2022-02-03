
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
  let btn = document.createElement('button');
  li.innerHTML = list[i];
  ul.appendChild(li);
  li.appendChild(btn).textContent = 'Delete';
  btn.addEventListener("click", del);
  function del (){
    li.remove("li");
  }
}




const btnAddList = document.querySelector("#addSong");
const formAddList = document.querySelector(".form");
const inputAuthor = document.getElementById("Author");
const inputSong = document.getElementById("Song");

AddForm.onclick =  () => {
  formAddList.classList.toggle('_active');
};



addSong.onclick = () =>{
  const objList = {};
  const objListArr = [];
  const list = [];
  if(inputAuthor.value !== '' && inputSong.value !== ''){
    pushList();
  }
  function pushList (){
    objList.author = inputAuthor.value.toUpperCase();
    objList.song = inputSong.value.toUpperCase();
    inputAuthor.value = "";
    inputSong.value = "";
    playList.push(objList);
    objListArr.push(objList);

    objListArr.forEach(function(music) {
      const {author,song} = music;
      list.push(`
      Author : ${author} 
      Song : ${song}
      `);
    });

    for (let i = 0; i < list.length; i++){
      let li = document.createElement('li');
      let btn = document.createElement('button');
      li.innerHTML = list[i];
      ul.appendChild(li);
      li.appendChild(btn).textContent = 'Delete';
      btn.addEventListener("click", del);
      function del (){
        li.remove("li");
      }
    }
  }
}
