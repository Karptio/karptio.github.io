const cart = [];

function addToCart(name, price) {
  const item = cart.find(i => i.name === name);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}

function updateCart() {
  document.getElementById('cartCount').textContent = cart.reduce((a, b) => a + b.quantity, 0);
  const cartItemsDiv = document.getElementById('cartItems');
  cartItemsDiv.innerHTML = '';
  cart.forEach(item => {
    cartItemsDiv.innerHTML += `
      <div class="cart-item">${item.name} — ${item.price} × ${item.quantity}</div>
    `;
  });
}

function toggleCart() {
  const modal = document.getElementById('cartModal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}

function clearCart() {
  cart.length = 0;
  updateCart();
}

function filterItems(category) {
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function goToCheckout() {
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = "checkout.html";
}
