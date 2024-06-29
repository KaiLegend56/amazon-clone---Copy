import {cart, addToCart} from '../data/cart.js';
import {loadProducts, products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';
loadProducts(renderProductsGrid);
function renderProductsGrid(){
  let productsHTML = '';

  products.forEach((product) => {
    productsHTML += `
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="${product.getStarUrl()}">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
        ${ product.getPrice()}
        </div>

        <div class="product-quantity-container">
          <select class="quantity-select js-quantity-select" data-product-id="${product.id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div> ${product.extraInfoHtml()}</div>
        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart"
        data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>
    `;
  });

  document.querySelector('.js-products-grid').innerHTML = productsHTML;

  function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity')
      .innerHTML = cartQuantity;
  }

  document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        addToCart(productId);
        updateCartQuantity();
      });
    });
    
    let searchItems=[];
  document.querySelector('.js-search-button')
  .addEventListener('click',()=>{
    //console.log(products[0].keyword);
    const searchElement=document.querySelector('.js-search-bar');
    let searchWord=searchElement.value.toLowerCase();
    console.log(searchWord);
    displaySearch(searchWord);
  })  
  function displaySearch(word){
    //window.location.href=`amazon.html?search=${word}`
   /* searchItems=products.map((productData)=>{
      if(productData.keyword.forEach((keyword)=>{

        return keyword;
      })===word)
      return productData;
      
    })
    console.log(searchItems);
  }*/
  console.log(products.forEach((product)=>{
    return product.keyword
  }))
}
  
}

  /*document.querySelectorAll(".js-quantity-select").forEach((select)=>{
    console.log(select.value);
   
  })*/
  