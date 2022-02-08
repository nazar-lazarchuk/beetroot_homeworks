var playList = [
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


const listHtml = document.getElementById('playlist');
let elementUl = document.createElement('ul');
for (let index = 0; index < playList.length; index++) {
    let elementLi = document.createElement("li");
    elementLi.innerText = `${playList[index].author}; ${playList[index].song}`;
    elementUl.append(elementLi);
}
listHtml.append(elementUl);




