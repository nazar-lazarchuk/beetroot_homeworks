/*1) Створити змінні в яких повинні бути:*/
//всі кнопки зі сторінки;
let allButton = document.querySelectorAll('.button');
console.log(allButton);

// всі инпути зі сторінки;
let allInput = document.querySelectorAll('input');
console.log(allInput);

// колекція посилань із футтера;
let linksFooter = document.querySelectorAll('ul.footer__list');
console.log(linksFooter);

// форма із футтера;
let formFooter = document.querySelector('.footer__form');
console.log(formFooter);

// логотип;
let logoPages = document.querySelectorAll('.logo__img')
console.log(logoPages);

// main;
let mainPage = document.querySelector('main');
console.log(mainPage);

// масив усіх секцій;
let sectionsOnPage = document.querySelectorAll('#section');
console.log([...sectionsOnPage]);


// меню;
let menuPages = document.querySelectorAll('.navigation__link');
console.log(menuPages);

//  колекція всіх тегів li із меню;
let itemMenu = menuPages[0].querySelectorAll('a');
console.log(itemMenu);

// 2) Перебираючи масив секцій створити масив зображень які в них є.
let images = [];
for (let i = 0; i < sectionsOnPage.length; i++) {
   let section = sectionsOnPage[i];
   let collectionImg = section.querySelectorAll('img');
   images.push(...collectionImg);
}
console.log(images);

// 4) Отримати масив всіх посилань на сторінці і вивести в консоль,
// текст та значення атрибуту href.

let pageLinks = document.querySelectorAll('a')
for (let i = 0; i < pageLinks.length; i++) {
   let links = pageLinks[i].innerText;
   let attributeHref = pageLinks[i].href;
   console.log(links, attributeHref);
}

// 3) Перебираючи масив зображень, вивести в консоль,
// текст заголовка наступної секції, у разі якщо вона є.

for (let i = 0; i < images.length; i++) {
   let section = images[i].closest('#section');
   let nextTag = section.nextElementSibling;

   if (nextTag.tagName === 'DIV') {
      const heading = nextTag.querySelectorAll('h1, h2, h3, h4');

      for (let j = 0; j < heading.length; j++) {
         console.log(heading[j].innerText);
      }
   }
}


