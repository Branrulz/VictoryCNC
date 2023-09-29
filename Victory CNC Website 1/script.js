// Function to make a payment using Square
function makeSquarePayment() {
  // Define your Square API endpoint and access token
  const squareApiUrl = 'https://connect.squareupsandbox.com/v2/payments';
  const accessToken = 'sandbox-sq0idb-xxGcGgwjcKAkUn6PVD6U2w'; // Replace with your actual Square access token

  // Define the payment request body
  const requestBody = {
    amount_money: {
      amount: calculateSubtotal(document.querySelectorAll('.cart-item')) * 100, // Convert to cents
      currency: 'USD',
    },
    idempotency_key: generateIdempotencyKey(),
    source_id: 'cnon:card-nonce-ok', // Replace with the actual source ID
  };

  // Define request headers
  const headers = {
    'Square-Version': '2023-09-25',
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };

  // Send the payment request to Square
  axios
    .post(squareApiUrl, requestBody, { headers })
    .then(response => {
      console.log('Payment successful:', response.data);
      // Handle successful payment, e.g., show a success message, clear the cart, etc.
      clearCart();
      alert('Payment successful! Thank you for your purchase.');
    })
    .catch(error => {
      console.error('Payment error:', error.response.data);
      // Handle payment error, e.g., show an error message to the user
      alert('Payment failed. Please try again later.');
    });
}

// Function to generate an idempotency key (a unique key for each payment request)
function generateIdempotencyKey() {
  return Date.now().toString();
}
