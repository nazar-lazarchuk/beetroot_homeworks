const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userComment = document.querySelector("#comment");
const feedbackForm = document.querySelector(".form");
const checkboxForm = document.querySelectorAll("#checkbox");
const radioForm = document.querySelectorAll("#radio");
const checkboxBlock = document.querySelector("#form1");
const radioBlock = document.querySelector("#form2");
const commentLimit = userComment.getAttribute("maxlength");
const commentCounter = document.querySelector("#counter");


const emailValidationBox = document.createElement("div");
userEmail.after(emailValidationBox);
const nameValidationBox = document.createElement("div");
userName.after(nameValidationBox);
const commentValidationBox = document.createElement("div");
userComment.after(commentValidationBox);
const radioValidationBox = document.createElement("div");
radioBlock.after(radioValidationBox);
const checkboxValidationBox = document.createElement("div");
checkboxBlock.after(checkboxValidationBox);


commentCounter.innerText = commentLimit;
userComment.addEventListener("input", () => {
  const counterResult = commentLimit - userComment.value.length;
  commentCounter.innerText = counterResult;
});


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
  if (/[1]/g.test(userComment.value)) {
    return "Please write comment without '1' ";
  }
  if (!/[A-Z][a-z]*/g.test(userComment.value)) {
    //відгук має починатись з великої букви і закінчуватись маленькою
    return "Please write correct comment";
  } else {
  }
};
const getRadioValidationMessage = (radio) => {
  for (let i = 0; i < radioForm.length; i++) {
    if (radioForm[i].checked) {
      return;
    }
  }
  return "Сhoose option";
};
const getСheckboxValidationMessage = (checkbox) => {
  for (let i = 0; i < checkboxForm.length; i++) {
    if (checkboxForm[i].checked) {
      return;
    }
  }
  return "Сhoose more than onecheckbox";
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
  const radio = radioForm;
  const checkbox = checkboxForm;

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
    for (const option of radioForm) {
      setInvalid(option, radioValidationBox, radioMessage);
      e.preventDefault();
    }
  }

  if (checkboxMessage) {
    for (const option of checkboxForm) {
      setInvalid(option, checkboxValidationBox, checkboxMessage);
      e.preventDefault();
    }
  }
});
