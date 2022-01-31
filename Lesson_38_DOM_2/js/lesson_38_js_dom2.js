// Point 1. Creation of the music list

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
    },
];

// creation of the container for the music list

const mainContainer = document.createElement('div');

mainContainer.className = 'musiclist-container';

document.body.prepend(mainContainer);

// creation of the title for the music list

const musicListTitleH3 = document.createElement('h3');

musicListTitleH3.className = 'musiclist-title';

musicListTitleH3.innerText = 'The Music list:';

mainContainer.appendChild(musicListTitleH3);

// creation of the music list

const musicListOl = document.createElement('ol');

musicListOl.id = 'musiclist_list';

mainContainer.appendChild(musicListOl);

// creation music list positions by cycle

const creationOfMusicListPositions = function(ol, list) {
    for (let i = 1; i < list.length; i++) {
	    let li = document.createElement('li');
	    li.innerHTML = list[i].author + ' - ' + list[i].song +'.';
	    ol.appendChild(li);
    }
}

// - if we wanna show basic play list
// creationOfMusicListPositions(musicListOl, playList);

// Point 2. Adding more songs

const newList = [
    {
     author: "TONGO",
     song:"PUMPED UP KICKS"
    },
    {
     author: "LITTLE BIG",
     song:"I`M OK"
    },
]

const joinedPlayList = playList.concat(newList);

console.log(joinedPlayList);

// - if we wanna show joined play list with the new songs, usind the previous function
creationOfMusicListPositions(musicListOl, joinedPlayList);