// Function to display cart
function displayCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    if (cart.length > 0) {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <div class="item-info">
                    <img src="${item.image}" alt="${item.title}" class="item-image">
                    <h3>${item.name}</h3>
                    <p>Price: €${item.price}</p>
                    <div class="item-quantity">
                        <button onclick="decrementQuantity(${item.id})">-</button>
                        <span id="quantity-${item.id}">${item.quantity}</span>
                        <button onclick="incrementQuantity(${item.id})">+</button>
                    </div>
                </div>
            `;
            cartContainer.appendChild(cartItem);
            totalPrice += (item.price * item.quantity);
        });
    } else {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    }
    const totalElement = document.createElement('div');
    totalElement.classList.add('cart-total');
    totalElement.innerHTML = `Total: $${totalPrice.toFixed(2)}`;
    cartContainer.appendChild(totalElement);
}

function incrementQuantity(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart[index].quantity = (cart[index].quantity || 1) + 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }
}
function decrementQuantity(productId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; 
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        if (cart[index].quantity && cart[index].quantity > 1) {
            cart[index].quantity -= 1;
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
        }
    }
}
function goToProductsPage() {
    window.location.href = 'product.html';
}
displayCart();