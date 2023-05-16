// Add event listener to the home link
const homeLink = document.getElementById('home-link');
homeLink.addEventListener('click', goToHome);

// Add event listener to the shop link
const shopLink = document.getElementById('shop-link');
shopLink.addEventListener('click', goToShop);

// Add event listener to the cart link
const cartLink = document.getElementById('cart-link');
cartLink.addEventListener('click', goToCart);

// Function to handle home link click
function goToHome(event) {
  event.preventDefault();
  // You can define the behavior when the home link is clicked, such as navigating to the home page or scrolling to the top of the page.
  // For example, you can use window.location.href = 'home.html'; to navigate to a separate HTML file for the home page.
  // In this case, make sure to create the corresponding HTML file.
  console.log('Home link clicked');
}

// Function to handle shop link click
function goToShop(event) {
  event.preventDefault();
  // You can define the behavior when the shop link is clicked, such as navigating to the shop page or loading shop-related content dynamically.
  console.log('Shop link clicked');
}

// Function to handle cart link click
function goToCart(event) {
  event.preventDefault();
  // You can define the behavior when the cart link is clicked, such as navigating to the cart page or displaying the cart modal.
  console.log('Cart link clicked');
}
