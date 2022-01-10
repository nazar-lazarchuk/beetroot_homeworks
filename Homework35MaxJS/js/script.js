const btnBasket = document.querySelector('.basket');
const basket = document.querySelector('.col-md-4');
btnBasket.addEventListener('click', showBasket);

function showBasket () {
    basket.classList.toggle("none");
}
