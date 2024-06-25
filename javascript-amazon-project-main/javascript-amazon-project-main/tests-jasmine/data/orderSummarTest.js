import {renderOrderSummary} from '../../scripts/checkout/orderSummary.js'
import { loadProducts } from '../../data/products.js';

describe('test-suite:renderOrderSummary',()=>{
    it('displays the cart',()=>{
        document.querySelector('.js-test-conntainer')
        .innerHTML=<div></div>

    })
        });

    beforeAll((done)=>{
        loadProducts();
        done();
    })
        
        
    it('it removes a product',()=>{
    const productId1='';
    const productId2='';
    spyOn(localStorage,'getItem').and.callFake(()=>{
        return JSON.stringify([
            {
                productId:productId1,
                quantity:2,
                deliveryOptionId:'2'
            },
            {
                productId:productId2,
                quantity:2,
                deliveryOptionId:'2'
            }
        ]);
    });

    loadFromStorage();

    expect(cart.length).toEqual(1);

})