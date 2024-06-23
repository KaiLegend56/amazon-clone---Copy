import { cart } from "../data/cart.js";

document.querySelector('.js-order-place-button')
.addEventListener('click',()=>{
    placeOrder(cart);
})
class orderHistory{
    productId;
    
}
function placeOrder(){
    localStorage.setItem(JSON.stringify(orderHistory),'')
    orderHistory.push(cart);
    orderHistory.forEach((order)=>{
        productListHTML='';
        order.forEach((product)=>{
            
        })
    })
}