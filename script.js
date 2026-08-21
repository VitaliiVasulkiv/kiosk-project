const products = [
    { id: 1, name: "Signature Burger", price: 6.50, category: "burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Cheeseburger", price: 5.50, category: "burgers", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "French Fries", price: 2.50, category: "burgers", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Chicken Nuggets (6 pcs)", price: 4.00, category: "burgers", image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&q=80" },
    { id: 5, name: "Double Bacon Burger", price: 7.80, category: "burgers", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=400&q=80" },
    { id: 6, name: "Onion Rings", price: 3.00, category: "burgers", image: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=400&q=80" },

    { id: 7, name: "Cappuccino", price: 2.80, category: "drinks", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80" },
    { id: 8, name: "Caffe Latte", price: 3.00, category: "drinks", image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=400&q=80" },
    { id: 9, name: "Espresso", price: 1.80, category: "drinks", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80" },
    { id: 10, name: "Coca-Cola 0.5l", price: 2.00, category: "drinks", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80" },
    { id: 11, name: "Orange Juice", price: 3.20, category: "drinks", image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80" },
    { id: 12, name: "Mineral Water 0.5l", price: 1.50, category: "drinks", image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=400&q=80" },

    { id: 13, name: "Cheesecake", price: 4.20, category: "desserts", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80" },
    { id: 14, name: "Chocolate Donut", price: 2.00, category: "desserts", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80" },
    { id: 15, name: "Apple Pie", price: 3.50, category: "desserts", image: "https://images.unsplash.com/photo-1601000938360-4e5f7f2b1d30?auto=format&fit=crop&w=400&q=80" },
    { id: 16, name: "Croissant with Nutella", price: 2.50, category: "desserts", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80" }
];

let cart = [];
let currentCategory = 'burgers';

document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const mainScreen = document.getElementById('main-screen');
    const startBtn = document.getElementById('start-btn');
    const manualCodeBtn = document.getElementById('manual-code-btn');

    const productsContainer = document.getElementById('products-container');
    const totalAmountEl = document.getElementById('total-amount');

    const checkoutModal = document.getElementById('checkout-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const checkoutBtn = document.getElementById('checkout-btn');
    const modalCartItems = document.getElementById('modal-cart-items');
    const modalTotalAmount = document.getElementById('modal-total-amount');
    const confirmOrderBtn = document.getElementById('confirm-order-btn');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            startScreen.classList.add('hidden');
            mainScreen.classList.remove('hidden');
            renderProducts();
        });
    }

    if (manualCodeBtn) {
        manualCodeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            alert('Введіть промокод на екранній клавіатурі');
        });
    }

    function renderProducts() {
        if (!productsContainer) return;
        productsContainer.innerHTML = '';
        
        const filteredProducts = products.filter(p => p.category === currentCategory);

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <h3>${product.name}</h3>
                <p>€${product.price.toFixed(2)}</p>
                <button class="add-btn" data-id="${product.id}">Add to Order</button>
            `;
            
            card.querySelector('.add-btn').addEventListener('click', () => {
                addToCart(product.id);
            });

            productsContainer.appendChild(card);
        });
    }

    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            
            const targetBtn = e.target.closest('.category-btn');
            if (targetBtn) {
                targetBtn.classList.add('active');
                currentCategory = targetBtn.dataset.category || 'burgers';
                renderProducts();
            }
        });
    });

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            updateCart();
        }
    }

    function updateCart() {
        if (!totalAmountEl) return;
        let total = cart.reduce((sum, item) => sum + item.price, 0);
        totalAmountEl.textContent = total.toFixed(2);
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            openModal();
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            if (checkoutModal) checkoutModal.classList.add('hidden');
        });
    }

    function openModal() {
        if (!modalCartItems || !modalTotalAmount || !checkoutModal) return;
        
        modalCartItems.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;
            const div = document.createElement('div');
            div.className = 'modal-cart-item';
            div.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="modal-cart-item-info">
                    <h4>${item.name}</h4>
                    <p>€${item.price.toFixed(2)}</p>
                </div>
                <button class="remove-item-btn" data-index="${index}">&times;</button>
            `;
            modalCartItems.appendChild(div);
        });

        modalCartItems.querySelectorAll('.remove-item-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = parseInt(e.target.dataset.index);
                cart.splice(idx, 1);
                updateCart();
                openModal();
                if (cart.length === 0) {
                    checkoutModal.classList.add('hidden');
                }
            });
        });

        modalTotalAmount.textContent = total.toFixed(2);
        checkoutModal.classList.remove('hidden');
    }

    if (confirmOrderBtn) {
        confirmOrderBtn.addEventListener('click', () => {
            alert('Order placed successfully! Proceeding to payment...');
            cart = [];
            updateCart();
            checkoutModal.classList.add('hidden');
        });const qrImage = document.querySelector('.qr-icon-wrapper img');

if (qrImage) {
    qrImage.addEventListener('click', () => {
        qrImage.classList.toggle('active');
    });
}
    }
});
