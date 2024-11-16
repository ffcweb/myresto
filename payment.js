const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const checkoutForm = document.getElementById('checkout-form');
const showMenus = document.getElementById('dish-menu')

let cart = [];
let total = 0;

// Add to Cart
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);

    cart.push({ name, price });
    total += price;
    updateCart();
  });
});

// Update Cart
function updateCart() {
  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.onclick = () => removeItem(index);
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });
  totalPrice.textContent = total.toFixed(2);
}

// Remove Item
function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

// Show Checkout Form
document.getElementById('checkout-btn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  checkoutForm.style.display = 'block';
  showMenus.style.display = "none";

});

// Handle Payment
document.getElementById('payment-form').addEventListener('submit', (e) => {
  // e.preventDefault();
  alert('Payment successful! Thank you for your order.');
  cart = [];
  total = 0;
  updateCart();
  checkoutForm.style.display = 'none';
  showMenus.style.display = "disply";
});
