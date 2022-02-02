const buttons = document.getElementsByTagName("button");
console.log(buttons);

const inputs = document.querySelectorAll("input");
console.log(inputs);

const footerLinks = document.querySelectorAll("a");
console.log(footerLinks);

const footerForm = document.getElementsByClassName("footer__form");
console.log(footerForm);

const logo = document.getElementById("logo");
console.log(logo);

//main немає все зроблено на section

const sections = document.getElementsByTagName("section", "nav", "footer");
console.log(sections);

const menu = document.querySelector("#nav");
console.log(menu);

const colectionFooterLi = document.querySelectorAll("footer > ul > li");
console.log(colectionFooterLi);

const links = document.querySelectorAll("a"); //до третього завдання
console.log(links);

//Перебираючи масив секцій створити масив зображень які в них є.
let images = []; // використовується і в другому завданні
const sectionsTags = document.querySelectorAll("section");
for (let i = 0; i < sectionsTags.length; i++) {
  const section = sectionsTags[i];
  images = [...images, ...Array.from(section.getElementsByTagName("img"))];
}
console.log(images);

//Перебираючи масив зображень, вивести в консоль, текст заголовка наступної секції, у разі якщо вона є.
for (let index = 0; index < images.length; index++) {
  const listImg = images[index];
  const closestSection = listImg.closest("section");
  if (!closestSection) continue;

  const nextSection = closestSection.nextElementSibling;

  if (nextSection.tagName === "SECTION") {
    const headingSection = nextSection.querySelector("h2");
    if (headingSection) {
      console.log(headingSection.innerText);
    }
  }
}

//Отримати масив всіх посилань на сторінці і вивести в консоль, текст та значення атрибуту href.
for (let i = 0; i < links.length; i++) {
  let linkInnerText = links[i].innerText;
  let attributeHref = links[i].href;
  console.log(
    `Text inside - ${linkInnerText} and attribute of link : ${attributeHref}`
  );
}
