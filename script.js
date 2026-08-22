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
        oldPrice: 3.20,
        category: "burgers", 
        calories: "365 kcal", 
        ingredients: "Crispy potatoes, salt, vegetable oil", 
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 4, 
        name: "Chicken Nuggets (6 pcs)", 
        price: 4.00, 
        oldPrice: 5.00,
        category: "burgers", 
        calories: "310 kcal", 
        ingredients: "Tender chicken breast in crispy breading, served with sauce", 
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 5, 
        name: "Double Bacon Burger", 
        price: 7.80, 
        oldPrice: 9.50,
        category: "burgers", 
        calories: "780 kcal", 
        ingredients: "Double beef patty, crispy bacon, cheddar cheese, BBQ sauce, onions", 
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 6, 
        name: "Onion Rings", 
        price: 3.00, 
        oldPrice: 3.80,
        category: "burgers", 
        calories: "340 kcal", 
        ingredients: "Crispy battered onion rings, deep-fried", 
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 24, 
        name: "Spicy Chicken Burger", 
        price: 6.20, 
        oldPrice: 7.50,
        category: "burgers", 
        calories: "590 kcal", 
        ingredients: "Spicy crispy chicken fillet, lettuce, signature hot sauce, pickles", 
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 25, 
        name: "Royal Mushroom Burger", 
        price: 7.20, 
        oldPrice: 8.50,
        category: "burgers", 
        calories: "610 kcal", 
        ingredients: "Beef patty, sautéed mushrooms, Swiss cheese, garlic mayo", 
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" 
    },

    // --- MEALS (Комбо-бокси) ---
    { 
        id: 20, 
        name: "Signature Meal", 
        price: 9.50, 
        oldPrice: 11.50,
        category: "meals", 
        calories: "1120 kcal", 
        ingredients: "Signature Burger + French Fries + Coca-Cola 0.5l", 
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 21, 
        name: "Cheeseburger Meal", 
        price: 8.00, 
        oldPrice: 10.00,
        category: "meals", 
        calories: "980 kcal", 
        ingredients: "Cheeseburger + French Fries + Coca-Cola 0.5l", 
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 22, 
        name: "Chicken Nugget Box", 
        price: 7.50, 
        oldPrice: 9.00,
        category: "meals", 
        calories: "850 kcal", 
        ingredients: "9 pcs Chicken Nuggets + French Fries + Drink of choice", 
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 23, 
        name: "Double Bacon Meal", 
        price: 10.20, 
        oldPrice: 12.50,
        category: "meals", 
        calories: "1250 kcal", 
        ingredients: "Double Bacon Burger + French Fries + Coca-Cola 0.5l", 
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 26, 
        name: "Spicy Chicken Meal", 
        price: 9.00, 
        oldPrice: 11.00,
        category: "meals", 
        calories: "1060 kcal", 
        ingredients: "Spicy Chicken Burger + French Fries + Coca-Cola 0.5l", 
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 27, 
        name: "Royal Mushroom Meal", 
        price: 9.80, 
        oldPrice: 11.80,
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
        oldPrice: 2.50,
        category: "drinks", 
        calories: "210 kcal", 
        ingredients: "Carbonated water, sugar, caramel color, phosphoric acid, natural flavors, caffeine", 
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 8, 
        name: "Orange Juice", 
        price: 3.20, 
        oldPrice: 3.80,
        category: "drinks", 
        calories: "110 kcal", 
        ingredients: "100% freshly squeezed orange juice, vitamin C", 
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 9, 
        name: "Mineral Water 0.5l", 
        price: 1.50, 
        oldPrice: 1.90,
        category: "drinks", 
        calories: "0 kcal", 
        ingredients: "Pure natural still mineral water", 
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 10, 
        name: "Lemonade", 
        price: 2.80, 
        oldPrice: 3.50,
        category: "drinks", 
        calories: "150 kcal", 
        ingredients: "Filtered water, fresh lemon juice, cane sugar, mint", 
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 28, 
        name: "Sprite 0.5l", 
        price: 2.00, 
        oldPrice: 2.50,
        category: "drinks", 
        calories: "190 kcal", 
        ingredients: "Carbonated water, sugar, citric acid, natural lemon and lime flavors", 
        image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 29, 
        name: "Fanta 0.5l", 
        price: 2.00, 
        oldPrice: 2.50,
        category: "drinks", 
        calories: "210 kcal", 
        ingredients: "Carbonated water, sugar, orange juice from concentrate, citric acid", 
        image: "https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 30, 
        name: "Apple Juice", 
        price: 3.00, 
        oldPrice: 3.60,
        category: "drinks", 
        calories: "115 kcal", 
        ingredients: "100% clarified apple juice, natural sweetness", 
        image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 31, 
        name: "Peach Juice", 
        price: 3.00, 
        oldPrice: 3.60,
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
        oldPrice: 5.20,
        category: "desserts", 
        calories: "410 kcal", 
        ingredients: "Cream cheese, graham cracker crust, sugar, vanilla, berry topping", 
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 12, 
        name: "Chocolate Donut", 
        price: 2.00, 
        oldPrice: 2.60,
        category: "desserts", 
        calories: "290 kcal", 
        ingredients: "Dough, chocolate glaze, sprinkles", 
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 37, 
        name: "Fruit Tart", 
        price: 3.90, 
        oldPrice: 4.80,
        category: "desserts", 
        calories: "220 kcal", 
        ingredients: "Shortcrust pastry, pastry cream, fresh seasonal fruits", 
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 13, 
        name: "Apple Pie", 
        price: 3.50, 
        oldPrice: 4.20,
        category: "desserts", 
        calories: "260 kcal", 
        ingredients: "Flaky pastry crust, diced apples, cinnamon, brown sugar", 
        image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 36, 
        name: "Tiramisu", 
        price: 4.80, 
        oldPrice: 5.80,
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
        oldPrice: 3.40,
        category: "caffe", 
        calories: "120 kcal", 
        ingredients: "Espresso, steamed milk, rich milk foam", 
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 15, 
        name: "Caffe Latte", 
        price: 3.00, 
        oldPrice: 3.70,
        category: "caffe", 
        calories: "150 kcal", 
        ingredients: "Espresso, lots of steamed milk, thin layer of foam", 
        image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=400&q=80" 
    },
    { 
        id: 16, 
        name: "Espresso", 
        price: 1.80, 
        oldPrice: 2.20,
        category: "caffe", 
        calories: "10 kcal", 
        ingredients: "Pure concentrated coffee shot", 
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80" 
    }
];

let cart = [];
let currentCategory = 'burgers';

// Виносимо renderProducts на глобальний рівень, щоб до нього був доступ звідусіль
function renderProducts() {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    
    const filteredProducts = products.filter(p => p.category === currentCategory);

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <button class="info-btn" onclick="showProductInfo(${product.id})">i</button>
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <h3>${product.name}</h3>
            <p>
                <span style="text-decoration: line-through; color: #888; font-size: 0.85em; margin-right: 6px;">€${product.oldPrice.toFixed(2)}</span>
                €${product.price.toFixed(2)}
            </p>
            <button class="add-btn" data-id="${product.id}">Add to Order</button>
        `;
        
        card.querySelector('.add-btn').addEventListener('click', (e) => {
            animateFlyToCart(e);
            addToCart(product.id);
        });

        productsContainer.appendChild(card);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

function updateCart() {
    const totalAmountEl = document.getElementById('total-amount');
    if (totalAmountEl) {
        let total = cart.reduce((sum, item) => sum + item.price, 0);
        totalAmountEl.textContent = total.toFixed(2);
    }

    const badge = document.getElementById('cart-badge');
    if (badge) {
        const totalCount = cart.length;
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
                    <p>
                        <span style="text-decoration: line-through; color: #888; font-size: 0.85em; margin-right: 6px;">€${item.oldPrice.toFixed(2)}</span>
                        €${item.price.toFixed(2)}
                    </p>
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
        });
    }
});

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
            alert('Please enter a valid code first!');
            return;
        }
        
        // 1. Закриваємо модальне вікно промокоду
        promoModal.classList.add('hidden');

        // 2. Показуємо велику, стильну та м'яку напівпрозову галочку
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

            // Плавна поява з затримкою
            setTimeout(() => {
                successPopup.style.opacity = '1';
                successPopup.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 50);

            // 3. Автоматично додаємо акційний товар у кошик
            const promoProduct = products.find(p => p.id === 1) || products[0];
            if (promoProduct && !cart.some(item => item.id === promoProduct.id)) {
                cart.push(promoProduct);
                updateCart();
            }

            // 4. Збільшений час показу (1.8 секунди), щоб анімація гарно дивилась, після чого відкриваємо кошик
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

                // Відкриваємо модальне вікно кошика
                const checkoutModal = document.getElementById('checkout-modal');
                const modalCartItems = document.getElementById('modal-cart-items');
                const modalTotalAmount = document.getElementById('modal-total-amount');

                if (checkoutModal && modalCartItems && modalTotalAmount) {
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
                               <p>
                                   <span style="text-decoration: line-through; color: #888; font-size: 0.85em; margin-right: 6px;">€${item.oldPrice ? item.oldPrice.toFixed(2) : (item.price * 1.2).toFixed(2)}</span>
                                   €${item.price.toFixed(2)}
                               </p>
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
                            btn.closest('.modal-cart-item').remove();
                            let newTotal = cart.reduce((sum, i) => sum + i.price, 0);
                            modalTotalAmount.textContent = newTotal.toFixed(2);
                            if (cart.length === 0) {
                                checkoutModal.classList.add('hidden');
                            }
                        });
                    });

                    modalTotalAmount.textContent = total.toFixed(2);
                    checkoutModal.classList.remove('hidden');
                }
            }, 1800);
        }
    });
}