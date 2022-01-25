// Point 1. Shopping list

const SHOPPING_LIST = [
    {
        productId: 1,
        productName: 'Magic stick',
        productQuantity: 5,
        productPrice: 10, // --- in $
        totalPurchasePrice: 0,
        isBought: true,
    },
    {
        productId: 2,
        productName: 'Tea',
        productQuantity: 2,
        productPrice: 5, // --- in $
        totalPurchasePrice: 0,
        isBought: false,
    },
    {
        productId: 3,
        productName: 'Sugar',
        productQuantity: 13,
        productPrice: 11, // --- in $
        totalPurchasePrice: 0,
        isBought: true,
    },
    {
        productId: 4,
        productName: 'Spoon',
        productQuantity: 6,
        productPrice: 7, // --- in $
        totalPurchasePrice: 0,
        isBought: false,
    },
    {
        productId: 5,
        productName: 'Plate',
        productQuantity: 8,
        productPrice: 9, // --- in $
        totalPurchasePrice: 0,
        isBought: true,
    },
];

// calculating the total price for each object

SHOPPING_LIST.forEach(obj => obj.totalPurchasePrice = obj.productQuantity * obj.productPrice);

// sorting of products

const sortListByBought = (a, b) => (a.isBought > b.isBought ? 1 : -1);

const sortList = [...SHOPPING_LIST].sort(sortListByBought);

console.log(sortList);

// Point 2. Buying the product

const purchaseList = function (inputProductName) {
    for (let i = 0; i < SHOPPING_LIST.length; i++) {
      if (SHOPPING_LIST[i].productName === inputProductName) {
        SHOPPING_LIST[i].isBought = true;
        return SHOPPING_LIST[i];
        }
    }
};

purchaseList('Tea');
console.log(SHOPPING_LIST);

// Point 3. List of non-bought products

const nonBoughtList = SHOPPING_LIST.filter((list) => !list.isBought);
console.log(nonBoughtList);

