const CartItem = document.querySelector(".cart-items");

const displayCartItems = () => {
  const items = JSON.parse(localStorage.getItem("cart"));
  items.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart_item";
    cartItem.innerHTML = `
    <p class="cart_item_title">${item.title}</p>
            <img src="${item.image}" alt="" class="cart_img" />
            <p class="cart_item_price">$${item.price}</p>
            <input type="number" value=${item.qun} class="cart_item_qty" />
            <p class="cart_item_subtotal">$${item.qun * item.price}</p>
            <p class="cart_item_delete">Delete</p>
    `;
    CartItem.appendChild(cartItem);
  });
};

displayCartItems();
