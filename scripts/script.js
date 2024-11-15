// Carrito de compras
let cart = [];

function addToCart(productName) {
    cart.push(productName);
    alert(productName + " se ha añadido al carrito.");
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = ""; // Limpia el carrito antes de actualizar
    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.textContent = item;
        cartItems.appendChild(cartItem);
    });
}

function checkout() {
    if (cart.length > 0) {
        alert("Gracias por su compra. Procesando pago...");
        cart = []; // Vaciar carrito después de la compra
        updateCart();
    } else {
        alert("Tu carrito está vacío.");
    }
}

function proceedToPayment() {
    window.location.href = "../htmls/pago.html";
}


function verProducto(nombre, descripcion, precio, imagen, lugar) {
    var url;
    if(lugar === true)
    {
        url = `./htmls/producto.html?nombre=${encodeURIComponent(nombre)}&descripcion=${encodeURIComponent(descripcion)}&precio=${precio}&imagen=${encodeURIComponent(imagen)}`;
    }
    else
    {
        url = `producto.html?nombre=${encodeURIComponent(nombre)}&descripcion=${encodeURIComponent(descripcion)}&precio=${precio}&imagen=${encodeURIComponent(imagen)}`;
    }
    
    window.location.href = url;
}


