
const personalInfo = (/^[A-ZА-ЯІЇ\'\][a-zа-яії]{1,}\s[A-ZА-ЯІЇ\'\][a-zа-яії]{1,}$/g);
console.log(personalInfo.test("Тарас Шевченко")); 
/*Сергій Тетяна Ігор Дем’ян */



const date = /^(0[1-9]|[1-2][0-9]|3[0-1])[- . .](0[1-9]|1[0-2])[- . .]([0-2][0-9][0-9][0-9])$/g 
console.log(date.test("11.06.1999")); 



const login = (/^(([a-zа-я]?){1,}([0-9]))\d*$/g)
console.log(login.test("Programer2021"))   