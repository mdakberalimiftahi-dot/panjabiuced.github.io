let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");
  const cartCount = document.getElementById("cart-count");
  const whatsappBtn = document.getElementById("whatsapp-order");

  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${item.name} – ₹${item.price}`;
    cartItems.appendChild(li);
  });

  totalPrice.textContent = total;
  cartCount.textContent = cart.length;

  // WhatsApp message
  let message = "Hello Panjabi Uced,%0A%0AI want to order:%0A";
  cart.forEach(item => {
    message += `- ${item.name} (₹${item.price})%0A`;
  });
  message += `%0A*Total: ₹${total}*%0A%0APayment: COD / UPI`;

  // 👉 अपना WhatsApp number यहाँ डालें (91 के बाद)
  whatsappBtn.href = `https://wa.me/91XXXXXXXXXX?text=${message}`;
}