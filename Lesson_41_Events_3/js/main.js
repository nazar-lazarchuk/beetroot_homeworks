// Form

// container
const mainContainer = document.createElement('div');
mainContainer.id = 'main-container';
document.body.prepend(mainContainer);
mainContainer.style.padding = "20px";

// inner content. form and it`s elements
const mainForm = document.createElement('form');
mainForm.id = 'main-form';
mainContainer.prepend(mainForm);

const mainFormTitle = document.createElement('h2');
mainFormTitle.id = 'main-form__title';
mainFormTitle.innerHTML = 'Send us your callback';
mainFormTitle.style.paddingLeft = "70px";
mainForm.appendChild(mainFormTitle);

// - input Name

const inputNameContainer = document.createElement('div');
inputNameContainer.id = 'input-name__container';
mainForm.appendChild(inputNameContainer);
inputNameContainer.style.padding = "20px";

const inputNameLabel = document.createElement('label');
//inputNameLabel.id = 'input-name__input'; TODO
inputNameLabel.innerHTML = 'Name:';
inputNameContainer.appendChild(inputNameLabel);

const inputNameInput = document.createElement('input');
inputNameInput.id = 'input-name__input';
inputNameInput.className = 'input-name';
inputNameInput.type = 'text';
inputNameInput.style.padding = "1px";
inputNameInput.style.marginLeft = "16px";
inputNameContainer.appendChild(inputNameInput);

// - input Email

const inputEmailContainer = document.createElement('div');
inputEmailContainer.id = 'input-email__container';
mainForm.appendChild(inputEmailContainer);
inputEmailContainer.style.padding = "20px";

const inputEmailLabel = document.createElement('label');
inputEmailLabel.innerHTML = 'E-mail:';
inputEmailContainer.appendChild(inputEmailLabel);

const inputEmailInput = document.createElement('input');
inputEmailInput.id = 'input-email__input';
inputEmailInput.className = 'input-email';
inputEmailInput.type = 'text';
inputEmailInput.style.padding = "1px";
inputEmailInput.style.marginLeft = "10px";
inputEmailContainer.appendChild(inputEmailInput);

// radiobuttons

const radioBtnContainer = document.createElement('div');
radioBtnContainer.id = 'radio-btns__container';
mainForm.appendChild(radioBtnContainer);
radioBtnContainer.style.padding = "20px";

const radioBtnTitle = document.createElement('h3');
radioBtnTitle.id = 'additional-info__title';
radioBtnTitle.innerHTML = 'Evaluate the quality of our services';
radioBtnContainer.appendChild(radioBtnTitle);

const radioBtn1 = document.createElement('input');
radioBtn1.id = 'radio-btn__input-1';
radioBtn1.type = 'radio';
radioBtnContainer.appendChild(radioBtn1);

const radioBtn1Label = document.createElement('label');
radioBtn1Label.innerHTML = 'Low';
radioBtn1Label.style.paddingLeft = "10px";
radioBtnContainer.appendChild(radioBtn1Label);

const radioBtn2 = document.createElement('input');
radioBtn2.id = 'radio-btn__input-2';
radioBtn2.type = 'radio';
radioBtn2.style.marginLeft = "30px";
radioBtnContainer.appendChild(radioBtn2);

const radioBtn2Label = document.createElement('label');
radioBtn2Label.innerHTML = 'Middle';
radioBtn2Label.style.paddingLeft = "10px";
radioBtnContainer.appendChild(radioBtn2Label);

const radioBtn3 = document.createElement('input');
radioBtn3.id = 'radio-btn__input-3';
radioBtn3.type = 'radio';
radioBtn3.checked = 'checked';
radioBtn3.style.marginLeft = "30px";
radioBtnContainer.appendChild(radioBtn3);

const radioBtn3Label = document.createElement('label');
radioBtn3Label.innerHTML = 'High';
radioBtn3Label.style.paddingLeft = "10px";
radioBtnContainer.appendChild(radioBtn3Label);

// checkbox

const checkboxContainer = document.createElement('div');
checkboxContainer.id = 'checkbox__container';
mainForm.appendChild(checkboxContainer);
checkboxContainer.style.padding = "20px";

const receiveNewsCheckbox = document.createElement('input');
receiveNewsCheckbox.id = 'checkbox__input';
receiveNewsCheckbox.type = 'checkbox';
receiveNewsCheckbox.checked = 'checked';
checkboxContainer.appendChild(receiveNewsCheckbox);

const receiveNewsCheckboxLabel = document.createElement('label');
receiveNewsCheckboxLabel.innerHTML = 'Subscribe on our news';
receiveNewsCheckboxLabel.style.paddingLeft = "20px";
checkboxContainer.appendChild(receiveNewsCheckboxLabel);

// - textarea

const additionalInfoContainer = document.createElement('div');
additionalInfoContainer.id = 'additional-info__container';
mainForm.appendChild(additionalInfoContainer);
additionalInfoContainer.style.padding = "20px";

const additionalInfoTitle = document.createElement('h3');
additionalInfoTitle.id = 'additional-info__title';
additionalInfoTitle.innerHTML = 'Additional information';
additionalInfoTitle.style.paddingLeft = "80px";
additionalInfoContainer.appendChild(additionalInfoTitle);

const additionalInfoArea = document.createElement('textarea');
additionalInfoArea.id = 'additional-info__area';
additionalInfoArea.cols = '40';
additionalInfoArea.rows = '5';
additionalInfoArea.placeholder = 'Type some text to us. Beware, number 1 is denied to input';
additionalInfoContainer.appendChild(additionalInfoArea);

// submit

const submitBtnContainer = document.createElement('div');
submitBtnContainer.id = 'submit-btn__container';
submitBtnContainer.style.padding = "20px";
mainForm.appendChild(submitBtnContainer);

const submitBtn = document.createElement('input');
submitBtn.id = 'submit-btn';
submitBtn.type = 'submit';
submitBtn.innerHTML = 'Send';
submitBtnContainer.appendChild(submitBtn);

// event

document.getElementById('submit-btn').addEventListener('click', (e) => {
    e.preventDefault();
    console.log('1');

    formValidation();

    function formValidation() {
        
        // checking the name

        let inputedName = document.getElementById('input-name__input').value;
        const nameController = /^[a-zA-Z\d]{3,15}$/.test(inputedName);
        console.log(nameController);

        if (nameController === false) {
            alert('Please enter the correct name (a-z, A-Z, length from 3 to 15 symbols)');
        };

        // checking the e-mail

        let inputedEmail = document.getElementById('input-email__input').value;
        const emailController = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$/.test(inputedEmail);
        console.log(emailController);

        if (emailController === false) {
            alert('Please enter the correct e-mail');
        };

        // checking the radiobtns

        let radioButton1 = document.getElementById('radio-btn__input-1');
        let radioButton2 = document.getElementById('radio-btn__input-2');
        let radioButton3 = document.getElementById('radio-btn__input-3');

        let radioBtnController = false;

        if (radioButton1.checked || radioButton2.checked || radioButton3.checked) {
            radioBtnController = true;
        } else {
            alert('Please, choose your mark');
        };
        console.log(radioBtnController);

        // checking the checkbox. the check is not required for the user
        
        let subscribeCheckbox = document.getElementById('checkbox__input');

        let qualityMarkController = false;

        if (subscribeCheckbox.checked) {
            qualityMarkController = true;
        } else {
            alert('Please, subscribe on our news!');
        };
        console.log(qualityMarkController);

        // checking the textarea

        let inputedText = document.getElementById('additional-info__area').value;
    
        let commentController = false;

        if (/[1]/.test(inputedText) || inputedText === '') {
            alert('Please, type your callback. Number 1 (one) is denied to input');
        } else {
            commentController = true;
        };

        console.log(commentController);

        // final validation and manual submit

        if (nameController === true && emailController === true && radioBtnController === true && commentController === true) {
            alert('Thank you for the feedback');
            document.getElementById('main-form').submit();
        };
    };
});
