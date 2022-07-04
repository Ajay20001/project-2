//Number of product
var count = 2;
let noOfProducts = document.getElementById('no-of-product');

//Cart
let closeBtn = document.getElementsByClassName("close");
for(let i=0; i < closeBtn.length; i++)
{
  // delete cart
  var btn = closeBtn[i];
  btn.addEventListener('click', (event) => {
    //Sub Number of product
    count--;
    noOfProducts.innerText = count;

    var clickedBtn = event.target;
    clickedBtn.parentElement.parentElement.remove();
    cartTotalPrice();
  })

  // updating total
  var productValues = document.getElementsByClassName('cart-value');
  for(let i=0; i<productValues.length; i++)
  {
    var input = productValues[i];
      input.addEventListener('change', () => {
      cartTotalPrice();
    })
  }


}

//adding products to cart
var addToCart = document.getElementsByClassName('add-product');
for(let i=0; i<addToCart.length; i++)
{
  var button = addToCart[i];
  button.addEventListener('click', (event) => {
    //Add Number of product
    count++;
    noOfProducts.innerText = count;

    var newEvent = event.target;
    var shopItem = newEvent.parentElement.parentElement;
    var cartProductTitle = shopItem.getElementsByClassName('card-text')[0].innerHTML;
    var cartProductPrice = shopItem.parentElement.getElementsByClassName('brand-price')[0].innerHTML;
    var cardImgSrc = shopItem.getElementsByClassName('product-img')[0].src;
    addItemsToCart(cardImgSrc, cartProductTitle, cartProductPrice);

    // updating total
    var productValues = document.getElementsByClassName('cart-value');
    for(let i=0; i<productValues.length; i++)
    {
      var input = productValues[i];
        input.addEventListener('change', () => {
        cartTotalPrice();
      })
    }
  })
}


// Adding items to cart 
let addItemsToCart = (cardImgSrc, cartProductTitle, cartProductPrice) => {
  var cartRow = document.createElement('div');
  var cartContainer = document.getElementsByClassName('cart')[0];
  var cartContent = `
  <div class="row cart-container-rows text-center">
      <div class="col-3 d-flex align-items-center justify-content-center">
        <img src="${cardImgSrc}" class="w-50">
      </div>
      <div class="col-3 d-flex align-items-center justify-content-center h5">
        ${cartProductTitle}
      </div>
      <div class="product-price d-flex align-items-center justify-content-center col-3 h5">
        ${cartProductPrice}
      </div>
      <div class="col-3 d-flex align-items-center justify-content-center gap-2">
        <input type="number" style="outline:none;" class="cart-value border border-danger border-3 rounded w-25" value="1" min="1">
        <button type="button" class="btn btn-danger close">X</button>
      </div>
      </div><br>`
  cartRow.innerHTML = cartContent;
  cartContainer.append(cartRow);
  cartRow.getElementsByClassName('close')[0].addEventListener('click', (event) => {
    var clickedBtn = event.target;
    clickedBtn.parentElement.parentElement.remove();
    cartTotalPrice();
  })
}

// calculating total price 
let cartTotalPrice = () => {
  var cartContainer = document.getElementsByClassName('cart-container')[0];
  var cartContainerRows = cartContainer.getElementsByClassName('cart-container-rows');
  var total = 0;
  for(let i=0; i < cartContainerRows.length; i++)
  {
    var cartRow = cartContainerRows[i];
    var productPrice = cartRow.getElementsByClassName('product-price')[0];
    var productQuantity = cartRow.getElementsByClassName('cart-value')[0];
    var itemsPrice = parseInt(productPrice.innerHTML.replace('$', ''));
    var itemsValue = productQuantity.value;
    total = total + (itemsPrice * itemsValue);
  }
  document.getElementsByClassName('total-price')[0].innerText = ' $' + total;
}  

// placing the order 
var addToCart = document.getElementsByClassName('place-order')[0];
    addToCart.addEventListener('click', () => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Your Order is placed',
        confirmButtonColor: '#dc3545'
    })

    
 })

