import { orderSummaryRender } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
new Promise((resolve)=>{
    loadProducts(()=>{
        orderSummaryRender();
        renderPaymentSummary();
    });
    
    resolve();
}).then(()=>{
    return new Promise(()=>{
        loadCart(()=>{
            resolve();
        });
    })
    
}).then(()=>{
    orderSummaryRender();
    renderPaymentSummary();
});
/*loadProducts(()=>{
    loadCart(()=>{
        orderSummaryRender();
        renderPaymentSummary();
    })//nesting of callback

});*/

