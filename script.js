// JavaScript to handle tab switching and adding items to the cart
document.addEventListener('DOMContentLoaded', function () {
  // Set up tab switching
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.menu-tab');

  tabButtons.forEach(button => {
    button.addEventListener('click', function () {
      const tabId = button.getAttribute('data-tab');

      // Remove active class from all buttons and tabs
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(tab => tab.classList.remove('active'));

      // Add active class to clicked button and corresponding tab
      button.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Cart handling
  const cart = [];
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const itemName = button.getAttribute('data-name');
      const itemPrice = parseFloat(button.getAttribute('data-price'));

      // Add item to cart
      cart.push({ name: itemName, price: itemPrice });

      // Update cart display
      updateCart();
    });
  });

  function updateCart() {
    // Clear cart items
    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
      cartItemsContainer.appendChild(li);
      total += item.price;
    });

    totalPriceElement.textContent = total.toFixed(2);
  }

  // Checkout button action
  document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Proceeding to checkout!');
    // Implement checkout logic here
  });
});
