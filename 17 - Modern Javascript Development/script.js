// Importing module 
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';


// addToCart('apples', 2);
// console.log(price, tq);

// console.log('Importing module');
// console.log(shippingCost);

// import everything
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);

import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
console.log(price);
import add, { cart } from './shoppingCart.js';

add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);


// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('end fetching');

// const getLastPost = async function () {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
    
//     // console.log(data);
//     // const lastPost = data[data.length - 1];
    
//     return {
//         title: data.at(-1).title, 
//         text: data.at(-1).body
//     }
// }

// const lastPost = getLastPost();
// console.log(lastPost);

// Not very clean
// lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// The module pattern
// const ShoppingCart2 = (function () {
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237;
//     const totalQuantity = 23;

//     const addToCart = function (product, quantity) {
//         cart.push({ product, quantity });
//         console.log(`${quantity} ${product} added to cart, (shipping cost is ${shippingCost})`);
//     }

//     const orderStock = function (product, quantity) {
//         console.log(`${quantity} ${product} orderer from supplier`);
//     }

//     return {
//         addToCart,
//         cart,
//         totalPrice,
//         totalQuantity
//     }
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);


// CommonJs Modules --> Mostly used in NodeJS

// Exporting
// export.addToCart =  function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart, (shipping cost is ${shippingCost})`);
// }    

// // Importing
// const { addToCart } = require('./shoppingCart.js');

//////////////////////////////////////////////
// Introduction to NPM

// import cloneDeep from '/node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
    cart: [
        { product: 'bread', quantity: 5},
        { product: 'pizza', quantity: 5},
    ],
    user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

// Bundling with parcel and NPM Scripts
// in the console: npx parcel index.html


// This allows parcel to make a change without reload the entirely page (very useful)
if (module.hot) {
    module.hot.accept();
}

class Person {
    #greeting = 'Hey';
    constructor (name) {
        this.name = name;
        console.log(`${this.#greeting} ${this.name}`);
    }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >+ 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// Polifilling async functions
import 'regenerator-runtime/runtime';
