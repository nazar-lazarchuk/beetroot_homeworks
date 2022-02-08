const popup = document.getElementById('modalWindow');
const btnOpen = document.querySelector('.btn-open');
const btnClose = popup.querySelector('.btn-close');

console.log(popup, btnOpen, btnClose);


 btnOpen.addEventListener('click', (e) => {
     popup.style.display = "block";
     btnOpen.style.display = "none";

 });

 btnClose.addEventListener('click', (e) => {
     popup.style.display = "none";
     btnOpen.style.display = "block";
     
 });

 popup.addEventListener('click', (e) => {
    popup.style.display = "none";
    btnOpen.style.display = "block";
    
});

