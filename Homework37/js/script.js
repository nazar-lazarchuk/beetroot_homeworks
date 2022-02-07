/* 1
- всі кнопки зі сторінки;
- всі инпути зі сторінки;
- колекція посилань із футтера;
- форма із футтера;
- логотип;
- main;
- масив усіх секцій;
- меню;
- колекція всіх тегів li із меню; */

const btns = document.querySelectorAll("button");
console.log(btns);

const inputs = document.querySelectorAll("input");
console.log(inputs);

const footerLinks = document.querySelectorAll("footer a");
console.log(footerLinks);


const logo = document.getElementById("logo");
console.log(logo);

const sections = document.querySelectorAll("section");
console.log(sections);

const menu = document.getElementById("menu");
console.log(menu);


// 2 Перебираючи масив секцій створити масив зображень які в них є.
const images = [];
for (let i = 0; i < sections.length; i++) {
  const divs = sections[i];

  const temp = divs.querySelectorAll("img");

  images.push(...temp);
}
console.log(images);

//3 Перебираючи масив зображень, вивести в консоль, текст заголовка наступної секції, у разі якщо вона є.

for (let i = 0; i < images.length; i++) {
  const img = images[i];
  const parentSection = img.closest("section");
 
  const nextSibling = parentSection.nextElementSibling;

  if (nextSibling === "SECTION") {
    const title = nextSibling.querySelector("h1, h2, h3");

    console.log(title.innerText);
  }
}

// 4 Отримати масив всіх посилань на сторінці і вивести в консоль, текст та значення атрибуту href.
const allLinks = document.querySelectorAll("a");

for (let i = 0; i < allLinks.length; i++) {
  console.log(`${allLinks[i].innerText}, ${allLinks[i].href}`);
}