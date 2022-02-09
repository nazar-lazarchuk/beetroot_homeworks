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

let musicListCounter = 0;

const creationOfMusicListPositions = function(ol, list) {
    for (let i = 0; i < list.length; i++) {
	    let li = document.createElement('li');
        li.style.marginBottom = '10px';
	    li.innerHTML = list[i].author + ' - ' + list[i].song +'.';
	    ol.appendChild(li);
        li.id = 'li-' + [i];

        let br1 = document.createElement('br');
        li.appendChild(br1);
        
        let btnDeleteSong = document.createElement('button');
        btnDeleteSong.innerHTML = 'Delete song';
        li.appendChild(btnDeleteSong);
        btnDeleteSong.className = 'delete-btn';
        btnDeleteSong.onclick = () => {
            btnDeleteSong.parentElement.remove();
            list.splice(list.indexOf(), 1);
        };
    }
}

// Point 2. Adding more songs

// Form

const addSongForm = document.createElement('form');

mainContainer.prepend(addSongForm);

const addSongFormTitleH4 = document.createElement('h4');

addSongFormTitleH4.innerText = 'Add a song to the list:';

mainContainer.prepend(addSongFormTitleH4);

const inputSongAuthor = document.createElement('input');
inputSongAuthor.type = 'text';
inputSongAuthor.id = 'input__song-author';
inputSongAuthor.placeholder = 'An author';

const inputSongName = document.createElement('input');
inputSongName.type = 'text';
inputSongName.id = 'input__song-name';
inputSongName.placeholder = 'A song name';

const btnSongFormSubmit = document.createElement('button');
btnSongFormSubmit.type = 'submit';
btnSongFormSubmit.innerText = 'Add';
btnSongFormSubmit.id = 'add-song__btn';

const br1 = document.createElement('br');
const br2 = document.createElement('br');

addSongForm.prepend(btnSongFormSubmit);
addSongForm.prepend(br2);
addSongForm.prepend(inputSongName);
addSongForm.prepend(br1);
addSongForm.prepend(inputSongAuthor);

document.getElementById('input__song-name').style.margin = "10px 0 10px 0";

// Catching the adding event

document.getElementById('add-song__btn').addEventListener('click', (e) => {
    e.preventDefault();

    let newList = [{}];
    
    let newSongAuthor = document.getElementById('input__song-author').value;
    let newSongName = document.getElementById('input__song-name').value;
    newList = {
        author: newSongAuthor.toUpperCase(),
        song: newSongName.toUpperCase(),
    };
    playList.push(newList);
    console.log(playList);

    musicListOl.innerHTML = '';

    creationOfMusicListPositions(musicListOl, playList);
});

creationOfMusicListPositions(musicListOl, playList);