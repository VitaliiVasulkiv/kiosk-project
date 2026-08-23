// Повний масив усіх твоїх товарів
const products = [
    // --- BURGERS ---
    { 
        id: 1, 
        name: "Signature Burger", 
        price: 6.50, 
        oldPrice: 8.00,
        category: "burgers", 
        calories: "650 kcal", 
        ingredients: "Beef patty, special sauce, lettuce, cheese, pickles, onions", 
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 2, 
        name: "Cheeseburger", 
        price: 5.50, 
        oldPrice: 7.00,
        category: "burgers", 
        calories: "520 kcal", 
        ingredients: "Beef patty, cheddar cheese, ketchup, mustard, pickles", 
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 3, 
        name: "French Fries", 
        price: 2.50, 
        category: "burgers", 
        calories: "365 kcal", 
        ingredients: "Crispy potatoes, salt, vegetable oil", 
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 4, 
        name: "Chicken Nuggets (6 pcs)", 
        price: 4.00, 
        category: "burgers", 
        calories: "310 kcal", 
        ingredients: "Tender chicken breast in crispy breading, served with sauce", 
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 5, 
        name: "Double Bacon Burger", 
        price: 7.80, 
        category: "burgers", 
        calories: "780 kcal", 
        ingredients: "Double beef patty, crispy bacon, cheddar cheese, BBQ sauce, onions", 
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 6, 
        name: "Onion Rings", 
        price: 3.00, 
        category: "burgers", 
        calories: "340 kcal", 
        ingredients: "Crispy battered onion rings, deep-fried", 
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 24, 
        name: "Spicy Chicken Burger", 
        price: 4.99, 
        oldPrice: 7.50,
        category: "popular", 
        calories: "590 kcal", 
        ingredients: "Spicy crispy chicken fillet, lettuce, signature hot sauce, pickles", 
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 25, 
        name: "Royal Mushroom Burger", 
        price: 6.20, 
        category: "burgers", 
        calories: "610 kcal", 
        ingredients: "Beef patty, sautéed mushrooms, Swiss cheese, garlic mayo", 
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" 
    },

    // --- MEALS (Комбо-бокси) ---
    { 
        id: 20, 
        name: "Signature Meal", 
        price: 11.50, 
        category: "meals", 
        calories: "1120 kcal", 
        ingredients: "Signature Burger + French Fries + Coca-Cola 0.5l", 
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 21, 
        name: "Cheeseburger Meal", 
        price: 8.00, 
        category: "meals", 
        calories: "980 kcal", 
        ingredients: "Cheeseburger + French Fries + Coca-Cola 0.5l", 
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 22, 
        name: "Chicken Nugget Box", 
        price: 7.50, 
        category: "meals", 
        calories: "850 kcal", 
        ingredients: "9 pcs Chicken Nuggets + French Fries + Drink of choice", 
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 23, 
        name: "Double Bacon Meal", 
        price: 10.20, 
        category: "meals", 
        calories: "1250 kcal", 
        ingredients: "Double Bacon Burger + French Fries + Coca-Cola 0.5l", 
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 26, 
        name: "Spicy Chicken Meal", 
        price: 7.00, 
        oldPrice: 11.00,
        category: "popular", 
        calories: "1060 kcal", 
        ingredients: "Spicy Chicken Burger + French Fries + Coca-Cola 0.5l", 
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 27, 
        name: "Royal Mushroom Meal", 
        price: 9.80, 
        category: "meals", 
        calories: "1080 kcal", 
        ingredients: "Royal Mushroom Burger + French Fries + Coca-Cola 0.5l", 
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=400&q=80" 
    },

    // --- DRINKS ---
    { 
        id: 7, 
        name: "Coca-Cola 0.5l", 
        price: 2.00, 
        category: "drinks", 
        calories: "210 kcal", 
        ingredients: "Carbonated water, sugar, caramel color, phosphoric acid, natural flavors, caffeine", 
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 8, 
        name: "Orange Juice", 
        price: 3.20, 
        category: "drinks", 
        calories: "110 kcal", 
        ingredients: "100% freshly squeezed orange juice, vitamin C", 
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 9, 
        name: "Mineral Water 0.5l", 
        price: 1.50, 
        category: "drinks", 
        calories: "0 kcal", 
        ingredients: "Pure natural still mineral water", 
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 10, 
        name: "Lemonade", 
        price: 2.80, 
        category: "drinks", 
        calories: "150 kcal", 
        ingredients: "Filtered water, fresh lemon juice, cane sugar, mint", 
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 28, 
        name: "Sprite 0.5l", 
        price: 2.00, 
        category: "drinks", 
        calories: "190 kcal", 
        ingredients: "Carbonated water, sugar, citric acid, natural lemon and lime flavors", 
        image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 29, 
        name: "Fanta 0.5l", 
        price: 2.00, 
        category: "drinks", 
        calories: "210 kcal", 
        ingredients: "Carbonated water, sugar, orange juice from concentrate, citric acid", 
        image: "https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 30, 
        name: "Apple Juice", 
        price: 3.00, 
        category: "drinks", 
        calories: "115 kcal", 
        ingredients: "100% clarified apple juice, natural sweetness", 
        image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 31, 
        name: "Peach Juice", 
        price: 3.20,
        category: "drinks", 
        calories: "125 kcal", 
        ingredients: "Peach puree, water, sugar, vitamin C", 
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=400&q=80" 
    },

    // --- DESSERTS ---
    { 
        id: 11, 
        name: "Cheesecake", 
        price: 4.20, 
        category: "desserts", 
        calories: "410 kcal", 
        ingredients: "Cream cheese, graham cracker crust, sugar, vanilla, berry topping", 
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 12, 
        name: "Chocolate Donut", 
        price: 2.00, 
        category: "desserts", 
        calories: "290 kcal", 
        ingredients: "Dough, chocolate glaze, sprinkles", 
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 37, 
        name: "Fruit Tart", 
        price: 3.90, 
        category: "desserts", 
        calories: "220 kcal", 
        ingredients: "Shortcrust pastry, pastry cream, fresh seasonal fruits", 
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 13, 
        name: "Apple Pie", 
        price: 3.50, 
        category: "desserts", 
        calories: "260 kcal", 
        ingredients: "Flaky pastry crust, diced apples, cinnamon, brown sugar", 
        image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 36, 
        name: "Tiramisu", 
        price: 4.80, 
        category: "desserts", 
        calories: "280 kcal", 
        ingredients: "Mascarpone, ladyfingers, coffee, cocoa powder, sugar", 
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=400&q=80" 
    },

    // --- CAFFE ---
    { 
        id: 14, 
        name: "Cappuccino", 
        price: 2.80, 
        category: "caffe", 
        calories: "120 kcal", 
        ingredients: "Espresso, steamed milk, rich milk foam", 
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 15, 
        name: "Caffe Latte", 
        price: 3.00, 
        category: "caffe", 
        calories: "150 kcal", 
        ingredients: "Espresso, lots of steamed milk, thin layer of foam", 
        image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 16, 
        name: "Espresso", 
        price: 1.80, 
        category: "caffe", 
        calories: "10 kcal", 
        ingredients: "Pure concentrated coffee shot", 
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80" 
    }
];

let cart = [];
let currentCategory = 'popular'; // Виправлено описку з 'pupular'

function renderProducts(categoryToRender = currentCategory) {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    
    const filteredProducts = products.filter(p => p.category === categoryToRender);

    filteredProducts.forEach((product, index) => {
        const card = document.createElement('div');

        // Перевірка: якщо це вкладка popular і перші два товари
        if (categoryToRender === 'popular' && (index === 0 || index === 1)) {
            card.className = 'product-card popular-wide-card';
            
            // Стара ціна виводиться лише тут, якщо вона задана в об'єкті товару
            const oldPriceHtml = product.oldPrice 
                ? `<span style="text-decoration: line-through; color: #888; font-size: 0.85em; margin-right: 6px;">€${product.oldPrice.toFixed(2)}</span>` 
                : '';

            card.innerHTML = `
                <button class="info-btn" onclick="showProductInfo(${product.id})" style="position: absolute; top: 10px; right: 10px;">i</button>
                <div class="popular-img" style="background-image: url('${product.image}');"></div>
                <div class="card-content">
                    <div class="badge">Best Seller 🔥</div>
                    <h3>${product.name}</h3>
                    <div class="price-block">
                        ${oldPriceHtml}
                        <strong style="color: #ff3b30; font-size: 1.1rem;">€${product.price.toFixed(2)}</strong>
                    </div>
                </div>
                <button class="add-btn" data-id="${product.id}">Order Now</button>
            `;
        } else {
            // Звичайний формат карток (без старої ціни)
            card.className = 'product-card';
            card.innerHTML = `
                <button class="info-btn" onclick="showProductInfo(${product.id})">i</button>
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <h3>${product.name}</h3>
                <p>
                    €${product.price.toFixed(2)}
                </p>
                <button class="add-btn" data-id="${product.id}">Add to Order</button>
            `;
        }
        
        card.querySelector('.add-btn').addEventListener('click', (e) => {
            animateFlyToCart(e);
            addToCart(product.id);
        });

        productsContainer.appendChild(card);
    });
}
// Додавання товару в кошик (з урахуванням кількості)
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
    }
}

function updateCart() {
    const totalAmountEl = document.getElementById('total-amount');
    if (totalAmountEl) {
        let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalAmountEl.textContent = total.toFixed(2);
    }

    const badge = document.getElementById('cart-badge');
    if (badge) {
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (totalCount > 0) {
            badge.textContent = totalCount;
            badge.classList.remove('hidden');
            badge.classList.add('pop');
            setTimeout(() => badge.classList.remove('pop'), 200);
        } else {
            badge.classList.add('hidden');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const mainScreen = document.getElementById('main-screen');
    const startBtn = document.getElementById('start-btn');

    const checkoutModal = document.getElementById('checkout-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const checkoutBtn = document.getElementById('view-order-btn');
    const confirmOrderBtn = document.getElementById('confirm-order-btn');

    const paymentModal = document.getElementById('payment-modal');
    const closePaymentModalBtn = document.getElementById('close-payment-modal');
    const successOrderScreen = document.getElementById('success-order-screen');
    const finishOrderBtn = document.getElementById('finish-order-btn');
    const orderNumberDisplay = document.getElementById('order-number-display');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            startScreen.classList.add('hidden');
            mainScreen.classList.remove('hidden');
            renderProducts();
        });
    }

    // Єдина правильна логіка перемикання категорій
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            
            const targetBtn = e.target.closest('.category-btn');
            if (!targetBtn) return;

            targetBtn.classList.add('active');
            currentCategory = targetBtn.dataset.category || 'popular';

            const productsContainer = document.getElementById('products-container');
            const titleEl = document.getElementById('category-title');

            if (currentCategory === 'popular') {
                if (titleEl) titleEl.textContent = '🔥 Popular Items';
                if (productsContainer) productsContainer.classList.add('popular-view');
            } else {
                if (productsContainer) productsContainer.classList.remove('popular-view');
                
                if (titleEl) {
                    if (currentCategory === 'burgers') titleEl.textContent = '🍔 Juicy Burgers';
                    else if (currentCategory === 'meals') titleEl.textContent = '🍟 Combo Meals';
                    else if (currentCategory === 'drinks') titleEl.textContent = '🥤 Refreshing Drinks';
                    else if (currentCategory === 'desserts') titleEl.textContent = '🍰 Sweet Desserts';
                    else if (currentCategory === 'caffe') titleEl.textContent = '☕ Caffe';
                }
            }

            renderProducts(currentCategory);
        });
    });

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showToast('Your cart is empty!');
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

    // Замість старого alert відкриваємо модалку вибору оплати
    if (confirmOrderBtn) {
        confirmOrderBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                showToast('Your cart is empty!');
                return;
            }
            if (checkoutModal) checkoutModal.classList.add('hidden');
            if (paymentModal) paymentModal.classList.remove('hidden');
        });
    }

    // Закриття вікна оплати
    if (closePaymentModalBtn) {
        closePaymentModalBtn.addEventListener('click', () => {
            if (paymentModal) paymentModal.classList.add('hidden');
        });
    }

    // Вибір методу оплати (карта / готівка)
    document.querySelectorAll('.pay-method-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (paymentModal) paymentModal.classList.add('hidden');

            const randomOrderNum = Math.floor(Math.random() * 90) + 10;
            if (orderNumberDisplay) {
                orderNumberDisplay.textContent = `#${randomOrderNum}`;
            }

            if (successOrderScreen) {
                successOrderScreen.classList.remove('hidden');
            }

            cart = [];
            updateCart();
        });
    });

    // Повернення на стартовий екран після натискання "Start New Order"
    if (finishOrderBtn) {
        finishOrderBtn.addEventListener('click', () => {
            if (successOrderScreen) successOrderScreen.classList.add('hidden');
            if (startScreen) startScreen.classList.remove('hidden');
            if (mainScreen) mainScreen.classList.add('hidden');
        });
    }
});

function openModal() {
    const checkoutModal = document.getElementById('checkout-modal');
    const modalCartItems = document.getElementById('modal-cart-items');
    const modalTotalAmount = document.getElementById('modal-total-amount');

    if (!modalCartItems || !modalTotalAmount || !checkoutModal) return;
    
    modalCartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item) => {
        total += item.price * item.quantity;
        const div = document.createElement('div');
        div.className = 'modal-cart-item';
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="modal-cart-item-info">
                <h4>${item.name}</h4>
                <p>€${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div class="modal-cart-item-quantity" style="display: flex; align-items: center; gap: 10px; margin: 0 10px;">
                <button class="qty-btn decrease-btn" data-id="${item.id}" style="width: 28px; height: 28px; border-radius: 6px; border: none; background: #ddd; font-weight: bold; cursor: pointer;">-</button>
                <span style="font-weight: bold; min-width: 15px; text-align: center;">${item.quantity}</span>
                <button class="qty-btn increase-btn" data-id="${item.id}" style="width: 28px; height: 28px; border-radius: 6px; border: none; background: #ddd; font-weight: bold; cursor: pointer;">+</button>
            </div>
            <button class="remove-item-btn" data-id="${item.id}">&times;</button>
        `;
        modalCartItems.appendChild(div);
    });

    // Обробка кліків по кнопках +, -, та видалення хрестиком всередині модалки
    modalCartItems.onclick = (e) => {
        const id = parseInt(e.target.dataset.id);
        if (!id) return;

        const cartItem = cart.find(item => item.id === id);
        if (!cartItem) return;

        if (e.target.classList.contains('increase-btn')) {
            cartItem.quantity += 1;
        } else if (e.target.classList.contains('decrease-btn')) {
            cartItem.quantity -= 1;
            if (cartItem.quantity <= 0) {
                cart = cart.filter(item => item.id !== id);
            }
        } else if (e.target.classList.contains('remove-item-btn')) {
            cart = cart.filter(item => item.id !== id);
        }

        updateCart();
        
        if (cart.length === 0) {
            checkoutModal.classList.add('hidden');
        } else {
            openModal(); // Оновлюємо модалку
        }
    };

    modalTotalAmount.textContent = total.toFixed(2);
    checkoutModal.classList.remove('hidden');
}

function showProductInfo(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('info-title').innerText = product.name;
    document.getElementById('info-calories').innerText = product.calories || "N/A";
    document.getElementById('info-ingredients').innerText = product.ingredients || "Standard ingredients";

    document.getElementById('info-modal').classList.remove('hidden');
}

function closeInfoModal() {
    document.getElementById('info-modal').classList.add('hidden');
}

function animateFlyToCart(event) {
    const button = event.target;
    const card = button.closest('.product-card');
    if (!card) return;
    
    const img = card.querySelector('.product-img');
    const cartIcon = document.querySelector('.cart-bag-icon');

    if (!img || !cartIcon) return;

    const imgRect = img.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();

    const flyer = document.createElement('img');
    flyer.src = img.src;
    flyer.className = 'flying-item';
    
    flyer.style.left = `${imgRect.left}px`;
    flyer.style.top = `${imgRect.top}px`;
    flyer.style.width = `${imgRect.width}px`;
    flyer.style.height = `${imgRect.height}px`;
    
    document.body.appendChild(flyer);

    requestAnimationFrame(() => {
        flyer.style.left = `${cartRect.left + cartRect.width / 2 - 15}px`;
        flyer.style.top = `${cartRect.top + cartRect.height / 2 - 15}px`;
        flyer.style.width = '30px';
        flyer.style.height = '30px';
        flyer.style.opacity = '0.4';
        flyer.style.transform = 'scale(0.2)';
    });

    setTimeout(() => {
        flyer.remove();
    }, 700);
}

// Логіка промокоду та віртуальної клавіатури з зеленою галочкою
const manualCodeBtn = document.getElementById('manual-code-btn');
const promoModal = document.getElementById('promo-modal');
const closePromoBtn = document.getElementById('close-promo-btn');
const promoTypedText = document.getElementById('promo-typed-text');
const keyButtons = document.querySelectorAll('.key-btn');
const keyBackspace = document.getElementById('key-backspace');
const submitPromoBtn = document.getElementById('submit-promo-btn');

let currentPromoInput = '';

if (manualCodeBtn && promoModal) {
    manualCodeBtn.addEventListener('click', () => {
        currentPromoInput = '';
        updatePromoDisplay();
        promoModal.classList.remove('hidden');
    });
}

if (closePromoBtn && promoModal) {
    closePromoBtn.addEventListener('click', () => {
        promoModal.classList.add('hidden');
    });
}

function updatePromoDisplay() {
    if (!promoTypedText) return;
    if (currentPromoInput === '') {
        promoTypedText.textContent = 'Tap code here...';
        promoTypedText.classList.add('placeholder-text');
    } else {
        promoTypedText.textContent = currentPromoInput;
        promoTypedText.classList.remove('placeholder-text');
    }
}

keyButtons.forEach(btn => {
    if (btn !== keyBackspace) {
        btn.addEventListener('click', () => {
            if (currentPromoInput.length < 15) {
                currentPromoInput += btn.textContent;
                updatePromoDisplay();
            }
        });
    }
});

if (keyBackspace) {
    keyBackspace.addEventListener('click', () => {
        currentPromoInput = currentPromoInput.slice(0, -1);
        updatePromoDisplay();
    });
}

if (submitPromoBtn) {
    submitPromoBtn.addEventListener('click', () => {
        if (currentPromoInput.trim() === '') {
            showToast('Please enter a valid code first!');
            return;
        }
        
        promoModal.classList.add('hidden');

        const startScreen = document.getElementById('start-screen');
        if (startScreen) {
            const successPopup = document.createElement('div');
            successPopup.style.cssText = `
                position: absolute;
                top: 45%;
                left: 50%;
                transform: translate(-50%, -50%) scale(0.4);
                background: rgba(15, 15, 15, 0.65);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                padding: 30px 45px;
                border-radius: 28px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 14px;
                z-index: 1000;
                box-shadow: 0 20px 40px rgba(0,0,0,0.35);
                border: 1px solid rgba(255, 255, 255, 0.08);
                opacity: 0;
                transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            `;
            successPopup.innerHTML = `
                <div style="width: 65px; height: 65px; background-color: rgba(40, 167, 69, 0.85); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; box-shadow: 0 0 25px rgba(40,167,69,0.5);">✓</div>
                <span style="color: rgba(255, 255, 255, 0.95); font-weight: 500; font-size: 17px; letter-spacing: 0.6px; text-align: center;">Promo Code Applied</span>
            `;
            startScreen.appendChild(successPopup);

            setTimeout(() => {
                successPopup.style.opacity = '1';
                successPopup.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 50);

            const promoProduct = products.find(p => p.id === 1) || products[0];
            if (promoProduct) {
                const existingItem = cart.find(item => item.id === promoProduct.id);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.push({ ...promoProduct, quantity: 1 });
                }
                updateCart();
            }

            setTimeout(() => {
                successPopup.style.opacity = '0';
                successPopup.style.transform = 'translate(-50%, -50%) scale(0.9)';
                setTimeout(() => successPopup.remove(), 400);

                const mainScreen = document.getElementById('main-screen');
                if (startScreen && mainScreen) {
                    startScreen.classList.add('hidden');
                    mainScreen.classList.remove('hidden');
                    renderProducts();
                }

                openModal();
            }, 1800);
        }
    });
}

function showToast(message) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    container.innerHTML = '';

    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2000);
}