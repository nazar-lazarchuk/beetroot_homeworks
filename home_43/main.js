const signInForm1 = document.getElementById("form1");
const signInForm2 = document.getElementById("form2");
const signInForm3 = document.getElementById("form3");

const fullName = document.getElementById("fullName");
const date = document.getElementById("date");
const login = document.getElementById("login");

const showFullNameValidationMessage = () => {
  if (fullName.value === "") {
    alert("This field cannot be empty");
  }
  if (
    /^[A-ZА-ЯІЇ\'\][a-zа-яії]{1,}\s[A-ZА-ЯІЇ\'\][a-zа-яії]{1,}$/g.test(
      fullName.value
    )
  ) {
    alert("Verification Successful");
  } else {
    alert("Incorrectly entered data");
  }
};

signInForm1.addEventListener("submit", (e) => {
  showFullNameValidationMessage();
  //JSON
  const info = {};
  info.fullName = fullName.value;
  infoData = JSON.stringify(info);
  console.log(infoData);
});

const showDateValidationMessage = () => {
  if (date.value === "") {
    alert("This field cannot be empty");
  }
  if (
    /^(0[1-9]|[1-2][0-9]|3[0-1])[- . .](0[1-9]|1[0-2])[- . .]([0-2][0-9][0-9][0-9])$/g.test(
      date.value
    )
  ) {
    alert("Verification Successful");
  } else {
    alert("Incorrectly entered data");
  }
};

signInForm2.addEventListener("submit", (e) => {
  showDateValidationMessage();
  //JSON
  const info = {};
  info.date = date.value;
  infoData = JSON.stringify(info);
  console.log(infoData);
});

const showLoginValidationMessage = () => {
  if (login.value === "") {
    alert("This field cannot be empty");
  }
  if (/^(([a-zа-я]?){1,}([0-9]))\d*$/g.test(login.value)) {
    alert("Verification Successful");
  } else {
    alert("Incorrectly entered data");
  }
};

signInForm3.addEventListener("submit", (e) => {
  showLoginValidationMessage();
  //JSON
  const info = {};
  info.login = login.value;
  infoData = JSON.stringify(info);
  console.log(infoData);
});
