function increaseQuantity(button) {
  const quantitySpan = button.previousElementSibling;
  let quantity = parseInt(quantitySpan.textContent);
  quantity++;
  quantitySpan.textContent = quantity;
  updateSubtotal(quantity);
}

function decreaseQuantity(button) {
  const quantitySpan = button.nextElementSibling;
  let quantity = parseInt(quantitySpan.textContent);
  if (quantity > 1) {
    quantity--;
    quantitySpan.textContent = quantity;
    updateSubtotal(quantity);
  }
}

function updateSubtotal(qty) {
  const pricePerItem = 999;
  const subtotal = qty * pricePerItem;
  document.getElementById("subtotal").textContent = subtotal;
}
