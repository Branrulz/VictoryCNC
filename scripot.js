// function to handle 'Add to Cart' button click
function addToCart() {
    // Get the product details
    const product = this.parentNode;
    const title = product.querySelector('h3').textContent;
    const price = product.querySelector('p').textContent;
    
    // Create a new cart item element
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    
    // Populate the cart item with product details
    cartItem.innerHTML = `
      <h3>${title}</h3>
      <p>${price}</p>
    `;
    
    // Append the cart item to the cart container
    const cartContainer = document.getElementById('cart-container');
    cartContainer.appendChild(cartItem);
    
    // Display a success message
    alert('Item added to cart!');
  }
  