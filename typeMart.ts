/*
TypeMart
Welcome to our new online shop: TypeMart! We’re ready to go live… well, almost… We’re attempting to get this shop up and going, but we need your help to code a crucial piece of our online mart: the purchase flow!

We think you’re the right person for the job because it’s really important to us that the purchase flow is type-safe. (All that type safety will allow us to sleep well at night.)

Currently, we are producing a few types of products, and we can’t wait to expand as we start to sell our first items. For our mart to be successful, we’ll have to calculate the correct price for shoppers, in addition to applying any specials or other charges.

Create a purchase flow for TypeMart visitors.
*/

import products from "./products";

let productName: string = "hoodie";
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "Arenales 2774, Buenos Aires, Argentina";

const product = products.find((product) => product.name === productName);

if (product?.preOrder === true) {
    console.log("We'll send you a message when your product is on its way.");
}

if (product?.price && product.price >= 25) {
    shipping = 0;
    console.log("We provide free shipping for this product.");
} else {
    shipping = 5;
}

if (shippingAddress.match("New York")) {
    taxPercent = 0.1;
} else {
    taxPercent = 0.05;
}

taxTotal = product?.price ? product.price * taxPercent : 0;
total = product?.price ? product.price + taxTotal + shipping : 0;

console.log(`
Product:  ${product?.name}
Address:  ${shippingAddress}
Price:    $${product?.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);