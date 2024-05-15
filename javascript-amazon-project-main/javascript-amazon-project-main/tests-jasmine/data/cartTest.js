import { addToCart,cart } from "../../data/cart.js";


spyOn(localStorage,'getItem').and.callFake(()=>{
    return JSON.stringify([
        {
            productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity:1,
            deliveryOption:'1'
        }
    ]);
})
describe('test suite:addToCart',()=>{
    it('adds an existing product to thehe cart',()=>{

    })
    it('adds new product to the cart',()=>{
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
    })
}
)