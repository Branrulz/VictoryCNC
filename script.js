// Add event listener to all "add to cart" buttons
const buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', addToCart);
}

// Function to handle 'Add to Cart' button click
function addToCart(event) {
  const button = event.target;
  const product = button.parentNode;
  const title = product.querySelector('h3').textContent;
  const price = product.querySelector('p').textContent;
  
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  
  cartItem.innerHTML = `
    <h3>${title}</h3>
    <p>${price}</p>
  `;
  
  const cartContainer = document.getElementById('cart-container');
  cartContainer.appendChild(cartItem);
  
  alert('Item added to cart!');
}
