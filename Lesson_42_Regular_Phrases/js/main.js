// Form

// container
const mainContainer = document.createElement('div');
mainContainer.id = 'main-container';
mainContainer.style.padding = "20px";
document.body.prepend(mainContainer);

// inner content. form and it`s elements
const mainForm = document.createElement('form');
mainForm.id = 'main-form';
mainContainer.prepend(mainForm);

const mainFormTitle = document.createElement('h2');
mainFormTitle.id = 'main-form__title';
mainFormTitle.innerHTML = 'Regular phrases';
mainFormTitle.style.paddingLeft = "70px";
mainForm.appendChild(mainFormTitle);

// - input Name and Surname

const inputNameContainer = document.createElement('div');
inputNameContainer.id = 'input-name__container';
inputNameContainer.style.padding = "20px";
mainForm.appendChild(inputNameContainer);

const inputNameLabel = document.createElement('label');
inputNameLabel.innerHTML = 'Name:';
inputNameContainer.appendChild(inputNameLabel);

const inputNameInput = document.createElement('input');
inputNameInput.id = 'input-name__input';
inputNameInput.className = 'input-name';
inputNameInput.type = 'text';
inputNameInput.placeholder = "Ivan Ivanov";
inputNameInput.style.padding = "1px";
inputNameInput.style.marginLeft = "16px";
inputNameContainer.appendChild(inputNameInput);

// - date

const inputDateContainer = document.createElement('div');
inputDateContainer.id = 'input-date__container';
inputDateContainer.style.padding = "20px";
mainForm.appendChild(inputDateContainer);

const inputDateLabel = document.createElement('label');
inputDateLabel.innerHTML = 'Date:';
inputDateContainer.appendChild(inputDateLabel);

const inputDateInput = document.createElement('input');
inputDateInput.id = 'input-date__input';
inputDateInput.className = 'input-date';
inputDateInput.type = 'text';
inputDateInput.placeholder = "dd.mm.yyyy";
inputDateInput.style.padding = "1px";
inputDateInput.style.marginLeft = "24px";
inputDateContainer.appendChild(inputDateInput);

// - input Login

const inputLoginContainer = document.createElement('div');
inputLoginContainer.id = 'input-login__container';
inputLoginContainer.style.padding = "20px";
mainForm.appendChild(inputLoginContainer);

const inputLoginLabel = document.createElement('label');
inputLoginLabel.innerHTML = 'Login:';
inputLoginContainer.appendChild(inputLoginLabel);

const inputLoginInput = document.createElement('input');
inputLoginInput.id = 'input-login__input';
inputLoginInput.className = 'input-login';
inputLoginInput.type = 'text';
inputLoginInput.placeholder = "ivan768";
inputLoginInput.style.padding = "1px";
inputLoginInput.style.marginLeft = "16px";
inputLoginContainer.appendChild(inputLoginInput);

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

    formValidation();

    function formValidation() {
        
        // checking the name

        let inputedName = document.getElementById('input-name__input').value;
        const nameController = /([а-яА-яa-zA-z]+\s)+([а-яА-яa-zA-z]+)/ig.test(inputedName);
        console.log(nameController);

        if (nameController === false) {
            alert('Please enter the correct name');
        };

        // checking the date

        let inputedDate = document.getElementById('input-date__input').value;
        const dateController = /^(0?[1-9]|[12][0-9]|3[01])[.](0?[1-9]|1[012])[.]\d{4}$/.test(inputedDate);
        console.log(dateController);

        if (dateController === false) {
            alert('Please enter the correct date dd.mm.yyyy');
        };
        
        // checking the login
        
        let inputedLogin = document.getElementById('input-login__input').value;
        const loginController = /(?:[a-zа-яё]\d|\d[a-zв-яё])/.test(inputedLogin);
        console.log(loginController);

        if (inputedLogin != inputedLogin.toLowerCase() && loginController === false) {
            alert('Please enter the correct login (a-z, 0-9)');
        };

        // final validation and manual submit
        
        if (nameController === true && dateController === true && loginController === true) {
            alert('Thank you!');
            document.getElementById('main-form').submit();
        };
    };
});
