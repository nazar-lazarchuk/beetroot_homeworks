// Мінімум
// Створи регулярні вирази для перевірки:
const userNameSurname = document.querySelector('#userNameSurname');
const userBirthday = document.querySelector('#userBirthday');
const userLogin = document.querySelector('#userLogin');
const btnSubmit = document.querySelector('.btn-submit');


function dataValidation() {
   // Ім'я та прізвища (два слова розділені пробілом, тільки букви)
   const checkUserNameSurname = /^[A-ZА-ЯІЇ\'\][a-zа-яії]{1,}\s[A-ZА-ЯІЇ\'\][a-zа-яії]{1,}$/ig.test(
      userNameSurname.value
   );
   console.log(checkUserNameSurname);

   if (checkUserNameSurname === false) {
      alert('Пожалуйста, введите правильно Имя и Фамилию ');
   };

   // Дати (формат 02.10.2021)
   const checkUserBirthday = /^(0?[1-9]|[12][0-9]|3[01])[.](0?[1-9]|1[012])[.]\d{4}$/.test(
      userBirthday.value
   );
   console.log(checkUserBirthday);
   if (checkUserBirthday === false) {
      alert('Пожалуйста, введите правильную дату дд.мм.гггг');
   };

   // Логіна (тільки літери і цифри, всі букви тільки в нижньому регістрі)
   const checkUserLogin = /^(([a-zа-я]?){1,}([0-9]))\d*$/g.test(
      userLogin.value
   )
   console.log(checkUserLogin);
   if (checkUserLogin === false && checkUserLogin !== /[a-zа-я]/) {
      alert('Для создания логина, Вы можете использовать буквы, только в нижнем регистре')
   };
}
btnSubmit.addEventListener('click', (e) => { dataValidation() })

