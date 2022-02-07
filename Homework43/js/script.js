///form///

let ObjForm = {};


document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		let error = formValidate(form);

		e.preventDefault();


		let name = document.getElementById('formName');
		let email = document.getElementById('formEmail');
		let website = document.getElementById('Website');
		let comment = document.getElementById('comment');


		if (error === 0) {
			function conversionJson () {
				ObjForm.name = name.value;
				ObjForm.email = email.value;
				ObjForm.website = website.value;
				ObjForm.comment = comment.value;
				let jsonObjForm = JSON.stringify(ObjForm);
				console.log(jsonObjForm);
			}
			conversionJson()
		} else {
			alert('Заповніть обовязкові поля');
    		e.preventDefault();
		}

	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

});
////////////////////


/*JSON*/


