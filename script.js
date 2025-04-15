const cart = [];
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));
    const image = button.closest('.card').querySelector('img').src;

    cart.push({ name, price, image });
    updateCart();
  });
});

function updateCart() {
  cartItemsElement.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    const itemContent = `
      <div class="d-flex align-items-center">
        <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px;">
        <span>${item.name}</span>
      </div>
      <span class="badge bg-primary rounded-pill">R$ ${item.price.toFixed(2)}</span>
    `;

    li.innerHTML = itemContent;
    cartItemsElement.appendChild(li);

    total += item.price;
  });

  cartTotalElement.textContent = total.toFixed(2);
}