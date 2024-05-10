import { cart } from "../data/cart.js";

document.querySelector('.js-order-place-button')
.addEventListener('click',()=>{
    placeOrder(cart);
})
orderHistory=[];
function placeOrder(){
    
    orderHistory.push(cart);
    orderHistory.forEach((order)=>{
        productListHTML='';
        order.forEach((product)=>{
            
        })
    })
}