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
const BUTTONS = document.getElementsByTagName("button");
console.log(BUTTONS);

//input
const INPUTS = document.getElementsByTagName("input");
console.log(INPUTS);

const INPUTS1 = document.getElementsByClassName("footer__field");
console.log(INPUTS1);

//колекція посилань із footer
const footerCollection = document.querySelectorAll("footer");
console.log(footerCollection);

// - форма із футера;
const FORM = document.getElementsByName("my-form")[0];
console.log(FORM);

const FORM1 = document.querySelector('form[name="my-form"]');
console.log(FORM1);

// - логотип;
const LOGO = document.getElementById("logo-1");
console.log(LOGO);

//масив усіх секцій;
const SECTIONS = document.getElementsByTagName("section");
console.log(SECTIONS);

const SECTIONS1 = document.getElementsByClassName("container");
console.log(SECTIONS1);

const SECTIONS2 = document.querySelectorAll("section");
console.log(SECTIONS2);

// 2 Перебираючи масив секцій створити масив зображень які в них є.

const images = [];
const sectionTags = document.querySelectorAll("section > div");
console.log(sectionTags);

for (let i = 0; i < sectionTags.length; i++) {
    const div = sectionTags[i];

    const imagesCollection = li.querySelectorAll("img");

    images.push(...imagesCollection);
}
console.log(images);


// 3.Перебираючи масив зображень, вивести в консоль, текст заголовка наступної секції, у разі якщо вона є.
//!!!Чомусь так і не запрацювала, хоча робив точно як на уроці

const images = document.quarySelectorAll("img");

for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const closestSection = img.closest("section");

    const nextTag = closestSection.nextElementSibling;
    // console.log(nextTag);

    if (nextTag.tagName === "SECTION") {
        const heading = nextTag.quarySelectorAll("div, h1, h2, h3");

        console.log(heading.innerText);
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
