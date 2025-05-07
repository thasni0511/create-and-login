"use strict";
// ================== GENERIC STORAGE FUNCTIONS ======================
function getFromStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}
function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
// ======================= CART CLASS ================================
class Cart {
    constructor() {
        this.items = [];
        this.items = getFromStorage('cart');
    }
    add(item) {
        this.items.push(item);
        saveToStorage('cart', this.items);
    }
    getItems() {
        return this.items;
    }
    remove(index) {
        this.items.splice(index, 1);
        saveToStorage('cart', this.items);
    }
    clear() {
        this.items = [];
        saveToStorage('cart', this.items);
    }
    count() {
        return this.items.length;
    }
}
const cart = new Cart();
// ===================== USER LOGIN CLASS ============================
class UserLogin {
    constructor() {
        this.users = [];
        this.users = getFromStorage('users');
        if (this.users.length === 0) {
            //user login
            const defaultUser = { username: 'sarah', password: '123' };
            this.users.push(defaultUser);
            saveToStorage('users', this.users);
        }
    }
    login(username, password) {
        return this.users.some(user => user.username === username && user.password === password);
    }
}
// ===================== LOGIN HANDLER ===============================
function handleLogin() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-btn');
    if (!usernameInput || !passwordInput || !loginButton)
        return;
    loginButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const loginManager = new UserLogin();
        if (loginManager.login(username, password)) {
            // alert('Login successful!');
            window.location.href = 'index.html';
        }
        else {
            alert('Invalid credentials!');
        }
    });
}
// ============== CAROUSEL + PRODUCT + CART  ====================
function initCarousel() {
    const img = document.getElementById('carousel-image');
    if (!img)
        return;
    const carouselImages = ['Images/image_carasoul.jpg', 'Images/img2.png', 'Images/img3.png'];
    let currentIndex = 0;
    function rotateCarousel() {
        if (!img)
            return;
        const dots = document.querySelectorAll('.carousel-dot');
        currentIndex = (currentIndex + 1) % carouselImages.length;
        img.src = carouselImages[currentIndex];
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    function generateCarouselDots() {
        const dotsContainer = document.querySelector('.carousel-dots');
        dotsContainer.innerHTML = '';
        carouselImages.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0)
                dot.classList.add('active');
            dotsContainer.appendChild(dot);
        });
    }
    generateCarouselDots();
    setInterval(rotateCarousel, 3000);
}
function addToCart(name) {
    var _a;
    const productElement = document.querySelector(`.product[data-name="${name}"]`);
    if (!productElement)
        return;
    const priceElement = productElement.querySelector('.offer-price') || productElement.querySelector('.price');
    const priceText = ((_a = priceElement === null || priceElement === void 0 ? void 0 : priceElement.textContent) === null || _a === void 0 ? void 0 : _a.replace(/[^\d]/g, '')) || '0';
    const price = parseInt(priceText);
    const imageExtensionMap = {
        Shoe: 'jpg', Bag: 'jpg', Book: 'jfif', Pen: 'jfif', Bottle: 'webp', umbrella: 'jpg',
        Glasses: 'jpg', Laptop: 'jpg', Watch: 'jpg', Phone: 'jpg', Headphones: 'jpg', Notebook: 'jpg'
    };
    const imageExtension = imageExtensionMap[name] || 'jpg';
    const image = `Images/${name.toLowerCase()}.${imageExtension}`;
    const product = { name, image, price };
    cart.add(product);
    const message = productElement.querySelector('.added-message');
    if (message) {
        message.classList.add('show');
        setTimeout(() => message.classList.remove('show'), 2000);
    }
    updateCartCountBadge();
}
function loadCart() {
    const cartItems = document.getElementById('cart-items');
    const totalCount = document.getElementById('total-count');
    const totalAmountElem = document.getElementById('total-amount');
    const items = cart.getItems();
    cartItems.innerHTML = '';
    let totalAmount = 0;
    items.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        totalAmount += item.price;
        cartItemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}" onerror="this.src='Images/default.jpg'" />
      <p>${item.name}</p>
      <p>₹${item.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
        cartItems.appendChild(cartItemDiv);
    });
    totalCount.textContent = cart.count().toString();
    if (totalAmountElem) {
        totalAmountElem.textContent = `₹${totalAmount}`;
    }
}
function removeFromCart(index) {
    cart.remove(index);
    loadCart();
    updateCartCountBadge();
}
function checkout() {
    alert('Checkout successful!');
    cart.clear();
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500);
}
function updateCartCountBadge() {
    const badge = document.getElementById('cart-count-badge');
    if (badge) {
        badge.textContent = cart.count().toString();
    }
}
function handleStickyHeader() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('sticky');
    }
    else {
        header.classList.remove('sticky');
    }
}
// =================== MAIN INITIALIZER =============================
window.onload = () => {
    if (window.location.pathname.endsWith('login.html')) {
        handleLogin();
    }
    else {
        initCarousel();
        if (window.location.pathname.endsWith('cart.html')) {
            loadCart();
        }
        document.querySelectorAll('.add-to-cart').forEach((btn) => {
            btn.addEventListener('click', () => {
                const name = btn.dataset.name;
                addToCart(name);
            });
        });
        window.addEventListener('scroll', handleStickyHeader);
        updateCartCountBadge();
    }
};
window.removeFromCart = removeFromCart;
