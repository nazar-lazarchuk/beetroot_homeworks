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
        };
  };

signInForm1.addEventListener("submit", (e) => {
    showFullNameValidationMessage();
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
    };
};

signInForm2.addEventListener("submit", (e) => {
    showDateValidationMessage();
});

const showLoginValidationMessage = () => {
  if (login.value === "") {
    alert("This field cannot be empty");
  }
  if (
    /^(([a-zа-я]?){1,}([0-9]))\d*$/g.test(
      login.value
    )
  ) {
    alert("Verification Successful");
  } else {
    alert("Incorrectly entered data");
};
};

signInForm3.addEventListener("submit", (e) => {
  showLoginValidationMessage();
});