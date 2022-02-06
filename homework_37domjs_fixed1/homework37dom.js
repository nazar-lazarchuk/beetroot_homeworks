// Використовуючи макет із першого модуля Producly:
// Створити змінні в яких повинні бути:
// - всі кнопки зі сторінки;
// - всі інпути зі сторінки;
// - колекція посилань із футера;
// - форма із футера;
// - логотип;
// - main;
// - масив усіх секцій;
// - меню;
// - колекція всіх тегів li із меню;
// 2.Перебираючи масив секцій створити масив зображень які в них є.
// 3.Перебираючи масив зображень, вивести в консоль, текст заголовка наступної секції, у разі якщо вона є.
// 4.Отримати масив всіх посилань на сторінці і вивести в консоль, текст та значення атрибуту href.

//button
const buttons = document.getElementsByTagName("button");
console.log(buttons);

//input
const inputs = document.getElementsByTagName("input");
console.log(inputs);

const inputs1 = document.getElementsByClassName("footer__field");
console.log(inputs1);

//колекція посилань із footer
const footerCollection = document.querySelectorAll("footer");
console.log(footerCollection);

// - форма із футера;
const form = document.getElementsByName("my-form")[0];
console.log(form);

const form1 = document.querySelector('form[name="my-form"]');
console.log(form1);

// - логотип;
const logo = document.getElementById("logo-1");
console.log(logo);

//масив усіх секцій;
const sections = document.getElementsByTagName("section");
console.log(sections);

const sections1 = document.getElementsByClassName("container");
console.log(sections1);

const sections2 = document.querySelectorAll("section");
console.log(sections2);

// 2 Перебираючи масив секцій створити масив зображень які в них є.

const images = [];
const sectionTags = document.querySelectorAll("section > div");
console.log(sectionTags);

for (let i = 0; i < sectionTags.length; i++) {
    const div = sectionTags[i];

    const imagesCollection = div.querySelectorAll("img");

    images.push(...imagesCollection);
}
console.log(images);


// 3.Перебираючи масив зображень, вивести в консоль, текст заголовка наступної секції, у разі якщо вона є.
//!!! Виправив

const images1 = document.querySelectorAll('img');

for (let i = 0; i < images1.length; i++) {
    const img = images1[i];
    const closestSection = img.closest("section");
if (!closestSection) continue;

    const nextTag = closestSection.nextElementSibling;
    // console.log(nextTag);

    if (nextTag.tagName === "SECTION") {
        const heading = nextTag.querySelector(".box_title, h1, h2, h3");
if (heading){
    console.log(heading.innerText);
}
    }
}


// /4.Отримати масив всіх посилань на сторінці і вивести в консоль, текст та значення атрибуту href.

const LINKS = document.querySelectorAll("a");

const linksHrefText = (allLinks) => {
    for (let i = 0; i < allLinks.length; i++) {
        console.log(`${allLinks[i].innerText} : ${allLinks[i].href}`);
    }
};

linksHrefText(LINKS);
