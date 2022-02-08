let playList = [
  {
      author: 'LED ZEPPELIN',
      song: 'STAIRWAY TO HEAVEN',
  },
  {
      author: 'QUEEN',
      song: 'BOHEMIAN RHAPSODY',
  },
  {
      author: 'LYNYRD SKYNYRD',
      song: 'FREE BIRD',
  },
  {
      author: 'DEEP PURPLE',
      song: 'SMOKE ON THE WATER',
  },
  {
      author: 'JIMI HENDRIX',
      song: 'ALL ALONG THE WATCHTOWER',
  },
  {
      author: 'AC/DC',
      song: 'BACK IN BLACK',
  },
  {
      author: 'QUEEN',
      song: 'WE WILL ROCK YOU',
  },
  {
      author: 'METALLICA',
      song: 'ENTER SANDMAN',
  },
];

const newMusickList = playList.map((i) => {
  const { author, song } = i;
  return `
      Autor:${author},
      Song:${song},
  `;
});

const list = document.querySelector('.songs-list');
const ol = document.createElement('ol');
list.append(ol);

const displayPlayList = () => {
  ol.innerHTML = '';
  for (let i = 0; i < newMusickList.length; i++) {
      let li = document.createElement('li');
      let button = document.createElement('button');
      const value = newMusickList[i];
      li.innerText = value;
      ol.append(li);
      li.appendChild(button).textContent = 'delete';
      button.onclick = () => {
          button.parentElement.remove();
          newMusickList.splice(newMusickList.indexOf(value), 1);
      };
  }
};
displayPlayList();

const btn = document.getElementById('button');
btn.addEventListener('click', () => {
  const form = document.getElementsByClassName('form')[0];
  form.classList.toggle('_active');
  let song = document.getElementById('song');
  let author = document.getElementById('author');
  addSong.onclick = () => {
      const valueAuthoe = author.value.toUpperCase();
      const valueSong = song.value.toUpperCase();
      if (valueAuthoe != '' && valueSong != '') {
        newMusickList.push(`
        Autor:${valueAuthoe},
        Song:${valueSong},
        `);
          form.classList.remove('_active');
          displayPlayList();
      } else {
          alert('Fill in required fields');
      }
  };
});
