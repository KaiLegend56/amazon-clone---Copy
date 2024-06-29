import { orderSummaryRender } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function loadPage(){
    try{
        await loadProductsFetch();
       //throw 'error 1';
   const value= await new Promise ((resolve,reject)=>{
        //throw 'error 2'
        loadCart(()=>{
            console.log('loaded cart 2');
            //reject('error 3');
            resolve('value 3');
            orderSummaryRender();
            renderPaymentSummary();
            })
            
        })
   
    } catch(error){
        console.log('error');
    }
    
}
loadPage();
  
    
/*Promise.all(
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
*/

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

