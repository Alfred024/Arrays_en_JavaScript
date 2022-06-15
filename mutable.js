const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];


const productsCut = [];

for (let i = 0; i < products.length; i++) {
    productsCut.push(products[i]);
}

const productsSelected = [];

const productIndex = products.findIndex(
    product => product.id === '🥞'
);

if(productIndex !== -1){
    productsSelected.push(products[productIndex]);
    productsCut.splice(productIndex,1);
}

///EJEMPLO 2 
const products2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const updates = {
    id: '🥞',
    changes: {
        price:10000,
        description: "Sabe chido"
    }
}

const productIndex2 = products2.findIndex(
    id => id.id === '🥞'
);

products2[productIndex2] = {
    ...products2[productIndex2],
    ...updates.changes
};