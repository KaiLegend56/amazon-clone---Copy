/*import { cart } from "../data/cart.js";

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
}*/
export const orders =JSON.parse(localStorage.getItem('orders'))||[]; 


export function addOrder(order){
    orders.unshift(order);
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('orders',JSON.stringify(orders));
}