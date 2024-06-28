import { orderSummaryRender } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

Promise.all(
    [
        loadProductsFetch().then(()=>{
            console.log('loaded products 2')
        }),        
        new Promise((resolve)=>{
            loadCart(()=>{
                console.log('loaded cart 2')
                resolve();
            });
        })
    ]
).then((values)=>{
    console.log('loaded products 2')
     orderSummaryRender();
     renderPaymentSummary();
    console.log(values);
});

/*new Promise((resolve)=>{
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
}); */
/*loadProducts(()=>{
    loadCart(()=>{
        orderSummaryRender();
        renderPaymentSummary();
    })//nesting of callback

});*/

