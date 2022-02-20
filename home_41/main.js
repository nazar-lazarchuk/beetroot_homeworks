const signInForm = document.getElementById("main");
const formFirstName = document.getElementById("firstname");
const formLastName = document.getElementById("lastname");
const formEmail = document.getElementById("emailname");
const formRadio = document.getElementById("gender-form");
const formCheckBox = document.getElementById("formcheck");
const formPassword = document.getElementById("password");
const firstNameValidationBox = document.createElement("div");
formFirstName.after(firstNameValidationBox);

const lastNameValidationBox = document.createElement("div");
formLastName.after(lastNameValidationBox);

const emailValidationBox = document.createElement("div");
formEmail.after(emailValidationBox);

const radioValidationBox = document.createElement("div");
formRadio.after(radioValidationBox);

const checkboxValidationBox = document.createElement("div");
formCheckBox.after(checkboxValidationBox);

const passwordValidationBox = document.createElement("div");
formPassword.after(passwordValidationBox);


const getFirstNameValidationMessage = (formFirstName) => {
  if (formFirstName.value === "") {
    return "Please write correct first name";
  }
};

const getLastNameValidationMessage = (formLastName) => {
  if (formLastName.value === "") {
    return "Please write correct last name";
  }
};

const getEmailValidationMessage = (formEmail) => {
    const FORBIDEN_DOMAINS = ["@yandex.ru", "@mail.ru", "@rambler.ru"];

    if (FORBIDEN_DOMAINS.some((domain) => formEmail.endsWith(domain))) {
      return "These domains are blocked!";
    }
  
    if (formEmail.value === "") {
      return "This field cannot be empty";
    }
};

const getRadioValidationMessage = () => {
    const radioButton1 = document.getElementById("male");
    const radioButton2 = document.getElementById("female");
    if (radioButton1.checked || radioButton2.checked) {
    } else {
        return "Select a Radio";
    };
};

const getСheckboxValidationMessage = (checkbox) => {
  if (checkbox.checked) {
  } else {
    return "Select a cheatbox";
  }
};

const getPasswordValidationMessage = (formPassword) => {
  if (formPassword.length < 6) {
    return "Password must be longer than 6 characters";
  }
  if (formPassword.value === "") {
    return "This field cannot be empty";
  }
  if (!/[A-Z]/g.test(formPassword)) {
    return "Password must contain at least one uppercase letter";
  }
  if (!/[a-z]/g.test(formPassword)) {
    return "Password must contain at least one lowercase letter";
  }
  if (!/[0-9]/g.test(formPassword)) {
    return "Password must contain at least one digit";
  }
};

const setInvalid = (field, messageBox, message) => {
  field.classList.add("is-invalid");
  messageBox.classList = "invalid-feedback";
  messageBox.innerText = message;
};


signInForm.addEventListener("submit", (e) => {
    const firstName = formFirstName.value;
    const lastName = formLastName.value;
    const email = formEmail.value;
    const radio = formRadio;
    const checkbox = formCheckBox;
    const password = formPassword.value;

    const firstNameMessage = getFirstNameValidationMessage(firstName);
    const lastNameMessage = getLastNameValidationMessage(lastName);
    const emailMessage = getEmailValidationMessage(email);
    const radioMessage = getRadioValidationMessage(radio);
    const checkboxMessage = getСheckboxValidationMessage(checkbox);
    const passwordMessage = getPasswordValidationMessage(password);


    if (firstNameMessage) {
      setInvalid(formFirstName, firstNameValidationBox, firstNameMessage);
      e.preventDefault();
    }
    if (firstNameMessage) {
      setInvalid(formLastName, lastNameValidationBox, lastNameMessage);
      e.preventDefault();
    }
    if (emailMessage) {
      setInvalid(formEmail, emailValidationBox, emailMessage);
      e.preventDefault();
    }
    if (radioMessage) {
      setInvalid(formRadio, radioValidationBox, radioMessage);
      e.preventDefault();
    }
    if (checkboxMessage) {
      setInvalid(formCheckBox, checkboxValidationBox, checkboxMessage);
      e.preventDefault();
    }
    if (passwordMessage) {
      setInvalid(formPassword, passwordValidationBox, passwordMessage);
      e.preventDefault();
    }
});

