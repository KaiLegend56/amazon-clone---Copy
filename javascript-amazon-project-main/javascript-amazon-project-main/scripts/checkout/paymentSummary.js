import { getProduct } from "../../data/products.js";
import { cart } from "../../data/cart.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { formatCurrency } from "../utils/money.js";
import {addOrder} from '../orders.js';

export function renderPaymentSummary(){
    let costExDelivery=0;
    let shippingDelivery=0;
    cart.forEach((cartItem)=>{
        let matchingItem=getProduct(cartItem.productId);
       costExDelivery+=matchingItem.priceCents*cartItem.quantity

       
        const deliveryOption=getDeliveryOption(cartItem.deliveryOptionId);
        shippingDelivery+=deliveryOption.priceCents;

        


    })
    let costBeforeTax=shippingDelivery+costExDelivery;
    let costAfterTax=0.1*costBeforeTax;
    let costTotal=costAfterTax+costBeforeTax;
    let paymentSummaryHTML=`
    <div class="payment-summary">
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (3):</div>
      <div class="payment-summary-money cart-item-cost">$${formatCurrency(shippingDelivery)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${formatCurrency(costExDelivery)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${formatCurrency(costBeforeTax)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${formatCurrency(costAfterTax)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${formatCurrency(costTotal)}</div>
    </div>

    <button class="place-order-button button-primary js-order-place-button">
      Place your order
    </button>
    `;

    document.querySelector('.js-payment-summary')
     .innerHTML=paymentSummaryHTML;
    
    document.querySelector('.js-order-place-button')
     .addEventListener('click',async ()=>{
      try{
      const response= await fetch('https://supersimplebackend.dev/orders',{
          method:'POST',
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify({
            cart:cart
          })
        })
        const order= await response.json();
        addOrder(order);
      }catch(error){
        console.log('unexpected error. pls try again later');
      }
      window.location.href='orders.html';
    });
    
  }
    
    

//renderPaymentSummary();
