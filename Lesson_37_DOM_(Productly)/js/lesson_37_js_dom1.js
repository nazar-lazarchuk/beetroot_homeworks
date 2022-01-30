//Point 1. All elements

/*
1. Створити змінні в яких повинні бути:
- всі кнопки зі сторінки;
- всі инпути зі сторінки;
- колекція посилань із футтера;
- форма із футтера;
- логотип;
- main;
- масив усіх секцій;
- меню;
- колекція всіх тегів li із меню;
*/

const btns = document.getElementsByTagName('button');
const inputs = document.getElementsByTagName('input');
const footerLinks = document.querySelectorAll('footer a');
const footerForm = document.getElementsByClassName('footer-form');
const logoFullElement = document.getElementsByClassName('logo'); // Div-container картинок-логотипа
const logoImgNav = document.querySelectorAll('nav img'); // Img-зображення логотипа з Nav
const logoImgFooter = document.querySelectorAll('footer img'); // Img-зображення логотипа з Footer
const mainElement = document.querySelector('main');
const allSections = document.querySelectorAll('main section');
const navMenu = document.getElementsByClassName('nav-link');
const navMenuLinks = document.querySelectorAll('nav a');

console.log(btns);
console.log(inputs);
console.log(footerLinks);
console.log(footerForm);
console.log(logoFullElement);
console.log(logoImgNav);
console.log(logoImgFooter);
console.log(mainElement);
console.log(allSections);
console.log(navMenu);
console.log(navMenuLinks);

// Point 2. The image array
/*
2. Перебираючи масив секцій створити масив зображень які в них є.
*/
// спочатку зробив так, думав треба зібрати посилання на картинки:
const sectionsMainImg = document.querySelectorAll('main section img');
console.log(sectionsMainImg);

const imgSectionArray = function(x) {
    let imgArray = [];
    for (let i = 0; i < x.length; i++) {
        imgArray.push(x[i].currentSrc);
    }
    return console.log(imgArray);
}

imgSectionArray(sectionsMainImg);

// потім по уроку. не писав в onst sectionTags "section > div" тому що остання картинка-лінія лежить просто в секції

const imgs = [];
const sectionTags = document.querySelectorAll('section');
console.log(sectionTags);

for (let i = 0; i < sectionTags.length; i++) {
    const x = sectionTags[i];
    const imagesCollection = x.querySelectorAll('img');
    imgs.push(...imagesCollection);
}
console.log(imgs);

// Point 3. 
/*
3. Перебираючи масив зображень, вивести в консоль, текст заголовка наступної секції, у разі якщо вона є.
*/
/*
const allImg = document.querySelectorAll('img');

for (let i = 0; i < allImg.length; i++) {
    const img = allImg[i];
    const closestSection = img.closest('section');
    const nextTag = closestSection.nextElementSibling;

    if (nextTag.tagName === "section") {
        const heading = nextTag.quarySelectorAll("div, h1, h2, h3");
        console.log(heading.innerText);
    }
}
// але в моэму випадку це не працює, так як h3 заголовок лише в першій секції ))))
*/
// Point 4. HREF array
/*
4. Отримати масив всіх посилань на сторінці і вивести в консоль, текст та значення атрибуту href.
*/

const hrefA = document.querySelectorAll('a');

const hrefAArray = function (z) {
    for (let i = 0; i < z.length; i++) {
        console.log(
            `${i}. text:${z[i].innerText}, link:${z[i].href}`
        );
    }
}

hrefAArray(hrefA);
