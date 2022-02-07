// Textarea

// container
const mainContainer = document.createElement('div');
mainContainer.id = 'main-container';
document.body.prepend(mainContainer);
mainContainer.style.padding = "20px";

// inner content
const mainContainerText = document.createElement('p');
mainContainerText.id = 'main-container__text';
mainContainer.prepend(mainContainerText);
mainContainerText.innerHTML = 'Раньше я любил работать на пилораме, а потом как отрезало';


const mainContainerNewText = document.createElement('textarea');
mainContainerNewText.id = 'main-container__new-text';
mainContainerNewText.cols = '40';
mainContainerNewText.rows = '5';
mainContainer.prepend(mainContainerNewText);
mainContainerNewText.style.display = 'none';

// event

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.code === 'KeyE') {        
        event.preventDefault();
        mainContainerText.style.display = 'none';
        mainContainerNewText.style.display = 'block';
        mainContainerNewText.innerHTML = mainContainerText.innerHTML;
    }
});

document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.code === 'Equal') {        
        event.preventDefault();
        mainContainerText.style.display = 'block';
        mainContainerNewText.style.display = 'none';
        mainContainerText.innerHTML = mainContainerNewText.value;
    }
});


