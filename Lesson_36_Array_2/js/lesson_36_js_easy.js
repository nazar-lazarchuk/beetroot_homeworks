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

const shopCheckSimple = function (x) {
    let checkSum = 0;
    for (let i = 0; i < x.length; i++) {
        console.log(`        ${x[i].id}. 
        Name of product: ${x[i].pName}. 
        Price: ${x[i].pPrice} $.
        Quantity: ${x[i].pQuantity} items.
        Sum: ${x[i].pPrice * x[i].pQuantity} $.
        ---------------------------------------`);
        checkSum = checkSum + x[i].pPrice * x[i].pQuantity;
    }
    console.log(`        TOTAL: ${checkSum} $.`);
}

shopCheckSimple(SHOP_CHECK);

// Point 3. The most expensive item

const theMostExpensiveProduct = function (y) {
    let expensiveProductId = 1, expensiveProductSum = 0;
    for (let i = 0; i < y.length; i++) {
        if (y[i].pPrice * y[i].pQuantity >= expensiveProductSum) {
            expensiveProductId = y[i].id;
        }
    }
    for (let i = 0; i < y.length; i++) {
        if (expensiveProductId === y[i].id) {
        console.log(`        -----------------------
        The most expensive product is: ${y[i].pName}. It costs ${y[i].pPrice * y[i].pQuantity} $ for ${y[i].pQuantity} items.
        -----------------------`);
        }
    }
}

theMostExpensiveProduct(SHOP_CHECK);

// Point 4. The average cost

const theAverageProductCost = function (z) {
    let theTotalProductsAmmount = 0, theTotalSum = 0;
    for (let i = 0; i < z.length; i++) {
        theTotalProductsAmmount = theTotalProductsAmmount + z[i].pQuantity;
        theTotalSum = theTotalSum + z[i].pPrice * z[i].pQuantity;
    }
    let theAverageCost = Math.trunc(theTotalSum * 100 / theTotalProductsAmmount) / 100;
    console.log(`        The average poduct cost is: ${theAverageCost} $ per item.
        -----------------------`);
}

theAverageProductCost(SHOP_CHECK);