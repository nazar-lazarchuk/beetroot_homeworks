const cartWrapper =  document.querySelector('.cart-wrapper');
const basketNum = document.querySelector('.basket__number');
window.addEventListener('click', function (event){
    if (event.target.hasAttribute('data-cart')){
        const card = event.target.closest('.card');

		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			weight: card.querySelector('.price__weight').innerText,
			price: card.querySelector('.price__currency').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};


       const itemInCrat = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if(itemInCrat){
           const counterElement = itemInCrat.querySelector('[data-counter]');
           counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {
            const cardItemHtml = `	<div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${productInfo.imgSrc}">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${productInfo.title}</div>
                    <div class="cart-item__weight"> ${productInfo.weight}</div>
                    <div class="cart-item__details">
                        <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>
                        <div class="price">
                            <div class="price__currency">${productInfo.price}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        
        cartWrapper.insertAdjacentHTML('beforeend', cardItemHtml);
        cartWrapper.children.length.innerText = ++basketNum.innerText;
        
        }

        card.querySelector('[data-counter]').innerText = '1';


        toggleCartStatus();

        calcCartPrice();

    }
});


