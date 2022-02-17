const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userComment = document.querySelector("#comment");
const feedbackForm = document.querySelector(".form");
const checkboxForm = document.querySelectorAll("#checkbox");
const radioForm = document.querySelectorAll("#radio")
const checkboxBlock = document.querySelectorAll("#form1")
const radioBlock = document.querySelectorAll("#form2")


const emailValidationBox = document.createElement("div");
userEmail.after(emailValidationBox);

const nameValidationBox = document.createElement("div");
userName.after(nameValidationBox);

const commentValidationBox = document.createElement("div");
userComment.after(commentValidationBox);

const checkboxValidation = document.createElement("div");
radioBlock.after(checkboxValidation);

const radioValidation = document.createElement("div");
radioBlock.after(radioValidation); 



const getEmailValidationMessage = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail.value)) {
  } else {
    return "Please write correct email address";
  }
};

const getNameValidationMessage = (name) => {
  if (
    /^[A-ZА-ЯІЇ\'\][a-zа-яії]{1,}\s[A-ZА-ЯІЇ\'\][a-zа-яії]{1,}$/g.test(
      userName.value
    )
  ) {
  } else {
    return "Please write correct name";
  }
};

const getTextAreaValidationMessage = (comment) => {
  if (userComment.value !== '') { 
      
    }else { "Please write comment"
  } 
};

const getRadioValidationMessage = (radio) => {
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
    }
  }
  return "pick up radio";
};

const getСheckboxValidationMessage = (checkbox) => {
  if (checkbox.checked) {
  } else {
    return "pick up checkbox";
  }
};

const setInvalid = (field, messageBox, message) => {
  field.classList.add("is-invalid");
  messageBox.classList = "invalid-feedback";
  messageBox.innerText = message;
};

feedbackForm.addEventListener("submit", (e) => {
  const email = userEmail.value;
  const name = userName.value;
  const comment = userComment.value;
  const checkbox = checkboxForm;
  const radio = radioForm;

  const emailMessage = getEmailValidationMessage(email);
  const nameMessage = getNameValidationMessage(name);
  const textAreaMessage = getTextAreaValidationMessage(comment);
  const radioMessage = getRadioValidationMessage(radio);
  const checkboxMessage = getСheckboxValidationMessage(checkbox);

  if (emailMessage) {
    setInvalid(userEmail, emailValidationBox, emailMessage);
    e.preventDefault();
  }
  if (nameMessage) {
    setInvalid(userName, nameValidationBox, nameMessage);
    e.preventDefault();
  }
  if (textAreaMessage) {
    setInvalid(userComment, commentValidationBox, textAreaMessage);
    e.preventDefault();
  }
  if (radioMessage) {
    setInvalid(radio, radioValidation, radioMessage);
    e.preventDefault();
  }
  if (checkboxMessage) {
    setInvalid(checkbox, checkboxValidation, checkboxMessage);
    e.preventDefault();
  }
});
