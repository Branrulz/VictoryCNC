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

  updateCartSummary();
  alert('Item added to cart!');
}

// Function to update the cart summary
function updateCartSummary() {
  const cartItems = document.querySelectorAll('.cart-item');
  const subtotal = calculateSubtotal(cartItems);
  const tax = calculateTax(subtotal);
  const total = subtotal + tax;

  const subtotalElement = document.getElementById('subtotal');
  subtotalElement.textContent = formatCurrency(subtotal);

  const taxElement = document.getElementById('tax');
  taxElement.textContent = formatCurrency(tax);

  const totalElement = document.getElementById('total');
  totalElement.textContent = formatCurrency(total);
}

// Function to calculate the subtotal of the cart items
function calculateSubtotal(cartItems) {
  let subtotal = 0;
  cartItems.forEach((cartItem) => {
    const price = parseFloat(cartItem.querySelector('p').textContent.slice(1));
    subtotal += price;
  });
  return subtotal;
}

// Function to calculate the tax
function calculateTax(subtotal) {
  const taxRate = 0.1; // Assuming tax rate is 10%
  return subtotal * taxRate;
}

// Function to format currency
function formatCurrency(amount) {
  return '$' + amount.toFixed(2);
}

// Add event listener to all "add to cart" buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', addToCart);
});

// Initialize the cart summary
updateCartSummary();
