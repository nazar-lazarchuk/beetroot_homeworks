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

const SORT_LIST_BY_BOUGHT = (a, b) => (a.isBought > b.isBought ? 1 : -1);

const SORTED_SHOPPING_LIST = [...SHOPPING_LIST].sort(SORT_LIST_BY_BOUGHT);

console.log(SORTED_SHOPPING_LIST);

// Point 2. Buying the product

const PURCHASE_LIST = function (inputProductName) {
    for (i = 0; i < SHOPPING_LIST.length; i++) {
      if (SHOPPING_LIST[i].productName === inputProductName) {
        SHOPPING_LIST[i].isBought = true;
        return SHOPPING_LIST[i];
        }
    }
};

PURCHASE_LIST('Tea');
console.log(SHOPPING_LIST);

// Point 3. List of non-bought products

const NON_BOUGHT_LIST = SHOPPING_LIST.filter((list) => !list.isBought);
console.log(NON_BOUGHT_LIST);

