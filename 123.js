const products = [
    { id: 1, name: "Смартфон", price: 20000, img: "https://tehnoaltyn.kz/wp-content/uploads/2023/06/iPhone.png" },
    { id: 2, name: "Ноутбук", price: 45000, img: "https://shop-almaty.kz/files/products/ead9f73f0c791dc76e1912259fd15e481.800x600w.jpg?e1aab2bb737081e97e67b78f4a2d3147" },
    { id: 3, name: "Наушники", price: 3000, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDFl6qSsR_WQJ2H3Uo47Mz_zTvNoKsVGiew&s" }
];

function displayProducts() {
    const productGrid = document.getElementById("productGrid");
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div class="product-name">${product.name}</div>
            <div class="product-price">${product.price} $.</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Добавить в корзину</button>
        `;
        productGrid.appendChild(productCard);
    });
}

function addToCart(productId) {
    const cart = document.querySelector('.cart');
    let count = parseInt(cart.textContent.match(/\d+/)[0]);
    cart.textContent = Корзина 
}
document.addEventListener("DOMContentLoaded", displayProducts);