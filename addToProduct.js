const products = [
    {
        id: 1,
        name:"APPLE Watch",
        price: 399.99,
        image: "images/apple watch.jpg"
    },
    {
        id: 2,
        name: "LOGITECH MX Master",
        price: 79.99,
        image: "images/logitech mouse.jpg"
    },
    {
        id: 3,
        name:"SAMSUNG 2TB SDD",
        price: 99.99,
        image: "images/SamsungDrive.jpg"
    },
    {
        id: 4,
        name:"Mackbook 2021",
        price: 1019.99,
        image: "images/macbook.webp"
    },
    {
        id: 5,
        name:"Samsung S8",
        price: 369.99,
        image: "images/samsung s8.jpg"
    },
    {
        id: 6,
        name:"APPLE AirPods",
        price: 189.99,
        image: "images/airpod.jpg"
    },
    {
        id: 7,
        name:"Samsung",
        price: 649.99,
        image: "images/samsung.jpg"
    },
    {
        id: 8,
        name:"IPHONE 12",
        price: 749.99,
        image: "images/iphone12.jpg"
    },
];
let cart = [];
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.name}</h3>
            <p>Price: €${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
}
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}
displayProducts();