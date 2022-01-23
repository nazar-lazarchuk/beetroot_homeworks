// Point 1-2. Printing of a check with total sum

const SHOP_CHECK = [
    {
        id: 1,
        pName: 'Wood',
        pQuantity: 4,
        pPrice: 5,
    },
    {
        id: 2,
        pName: 'Steel',
        pQuantity: 5,
        pPrice: 6,
    },
    {
        id: 3,
        pName: 'Glass',
        pQuantity: 6,
        pPrice: 7,
    },
];

const SHOP_CHECK_SIMPLE = function () {
    let checkSum = 0;
    for (i = 0; i < SHOP_CHECK.length; i++) {
        console.log(`        ${SHOP_CHECK[i].id}. 
        Name of product: ${SHOP_CHECK[i].pName}. 
        Price: ${SHOP_CHECK[i].pPrice} $.
        Quantity: ${SHOP_CHECK[i].pQuantity} items.
        Sum: ${SHOP_CHECK[i].pPrice * SHOP_CHECK[i].pQuantity} $.
        ---------------------------------------`);
        checkSum = checkSum + SHOP_CHECK[i].pPrice * SHOP_CHECK[i].pQuantity;
    }
    console.log(`        TOTAL: ${checkSum} $.`);
}

SHOP_CHECK_SIMPLE(SHOP_CHECK);

// Point 3. The most expensive item

const THE_MOST_EXPENSIVE_PRODUCT = function () {
    let expensiveProductId = 1, expensiveProductSum = 0;
    for (i = 0; i < SHOP_CHECK.length; i++) {
        if (SHOP_CHECK[i].pPrice * SHOP_CHECK[i].pQuantity >= expensiveProductSum) {
            expensiveProductId = SHOP_CHECK[i].id;
        }
    }
    for (i = 0; i < SHOP_CHECK.length; i++) {
        if (expensiveProductId === SHOP_CHECK[i].id) {
        console.log(`        -----------------------
        The most expensive product is: ${SHOP_CHECK[i].pName}. It costs ${SHOP_CHECK[i].pPrice * SHOP_CHECK[i].pQuantity} $ for ${SHOP_CHECK[i].pQuantity} items.
        -----------------------`);
        }
    }
}

THE_MOST_EXPENSIVE_PRODUCT(SHOP_CHECK);

// Point 4. The average cost

const THE_AVERAGE_PRODUCT_COST = function () {
    let theTotalProductsAmmount = 0, theTotalSum = 0;
    for (i = 0; i < SHOP_CHECK.length; i++) {
        theTotalProductsAmmount = theTotalProductsAmmount + SHOP_CHECK[i].pQuantity;
        theTotalSum = theTotalSum + SHOP_CHECK[i].pPrice * SHOP_CHECK[i].pQuantity;
    }
    let theAverageCost = Math.trunc(theTotalSum * 100 / theTotalProductsAmmount) / 100;
    console.log(`        The average poduct cost is: ${theAverageCost} $ per item.
        -----------------------`);
}

THE_AVERAGE_PRODUCT_COST(SHOP_CHECK);