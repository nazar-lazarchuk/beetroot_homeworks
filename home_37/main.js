//1
const buttons = document.getElementsByTagName("button");//button
console.log(buttons);

const inputs = document.getElementsByTagName("input");//input
console.log(inputs);

const footerCollection = document.querySelectorAll("footer");//колекція посилань із footer
console.log(footerCollection);

const form = document.getElementById("footer-button");//форма із футера
console.log(form);

const logo = document.getElementById("logo");//логотип
console.log(logo);

const section = document.querySelectorAll("section");//масив усіх секцій
console.log(section);

const menu = document.getElementsByClassName("nav");//меню
console.log(menu);

const liElements = document.getElementsByClassName("menu");//колекція всіх тегів li із меню;
console.log(liElements);

//2
const images = [];
const sectionTags = document.querySelectorAll("section > div");
for (let i = 0; i < sectionTags.length; i++) {
    const j = sectionTags[i];
    const imagesCollection = j.querySelectorAll("img");
    images.push(...imagesCollection);
}
console.log(images);

//3
const images = document.querySelectorAll("img");
console.log(images);
for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const closestSection = img.closest("section");
    const nextTag = closestSection.nextElementSibling;
    if (nextTag.tagName === "section") {
        const heading = nextTag.quarySelectorAll("div, h1, h2, h3");
        console.log(heading.innerText);
    }
}

//4
const links = document.querySelectorAll("a");
const hrefLinks = function (j) {
    for (let i = 0; i < j.length; i++) {
        console.log(
            `${i}. text:${j[i].innerText}, link:${j[i].href}`
        );
    }
}
hrefLinks(links);