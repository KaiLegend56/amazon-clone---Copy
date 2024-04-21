cart=[];

function update(productId){
    
    products.forEach((item)=>{
        
     if(productId===item.id)
     {cartHTML+=`
     <div class="product-name limit-text-to-2-lines">
     ${item.name}
     </div>`;
console.log(cartHTML);
    }
    })


    
}

function addToCart(item){
        
}
