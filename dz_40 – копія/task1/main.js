const text = document.querySelector('#textBlock');
const editText = document.querySelector('#editBlock');

document.addEventListener('keydown', function(event){
    if (event.code === 'KeyE' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        editText.style.display = 'block'
        text.style.display = 'none'
        editText.value = text.innerText;
    } 
    if (event.code === 'Equal' && (event.ctrlKey || event.metaKey) || event.code === 'NumpadAdd' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        editText.style.display = 'none'
        text.style.display = 'block'
        text.innerText = editText.value;
    }
})
