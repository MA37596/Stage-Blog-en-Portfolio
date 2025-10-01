// Winkelmandje systeem
class ShoppingCart {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.updateCartCounter();
        this.bindEvents();
    }

    // Voeg product toe aan winkelmandje
    addToCart(productId, productName, productPrice, productImage, quantity = 1) {
        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                id: productId,
                name: productName,
                price: parseFloat(productPrice),
                image: productImage,
                quantity: quantity
            });
        }
        
        this.saveCart();
        this.updateCartCounter();
        this.showNotification(`${productName} toegevoegd aan winkelmandje!`);
    }

    // Verwijder product uit winkelmandje
    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartCounter();
        this.showNotification('Product verwijderd uit winkelmandje');
    }

    // Update product hoeveelheid
    updateQuantity(productId, newQuantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (newQuantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = newQuantity;
                this.saveCart();
                this.updateCartCounter();
            }
        }
    }

    // Bewaar winkelmandje in localStorage
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    // Update cart counter in header
    updateCartCounter() {
        const totalItems = this.cart.reduce((total, item) => total + item.quantity, 0);
        const cartCounters = document.querySelectorAll('.cart-counter');
        cartCounters.forEach(counter => {
            counter.textContent = totalItems;
            counter.style.display = totalItems > 0 ? 'block' : 'none';
        });
    }

    // Bereken totaalprijs
    getTotalPrice() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Toon notificatie
    showNotification(message) {
        // Verwijder bestaande notificatie
        const existingNotification = document.querySelector('.cart-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Maak nieuwe notificatie
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <ion-icon name="checkmark-circle" class="notification-icon"></ion-icon>
                <span>${message}</span>
            </div>
        `;

        // Voeg styles toe
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
        `;

        // Voeg aan DOM
        document.body.appendChild(notification);

        // Animeer in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Verwijder na 3 seconden
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
    }

    // Bind events aan cart buttons
    bindEvents() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.add-to-cart-btn')) {
                e.preventDefault();
                const button = e.target.closest('.add-to-cart-btn');
                const productCard = button.closest('.product-card');
                
                const productId = button.dataset.productId;
                const productName = productCard.querySelector('.card-title').textContent.trim();
                const productPrice = productCard.querySelector('.card-price').getAttribute('value');
                const productImage = productCard.querySelector('.img-cover').src;
                
                this.addToCart(productId, productName, productPrice, productImage);
            }
        });

        // Cart button click handler
        document.addEventListener('click', (e) => {
            if (e.target.closest('[aria-label="cart"]') || e.target.closest('.cart-btn')) {
                e.preventDefault();
                this.showCartModal();
            }
        });
    }

    // Toon winkelmandje modal
    showCartModal() {
        // Verwijder bestaande modal
        const existingModal = document.querySelector('.cart-modal');
        if (existingModal) {
            existingModal.remove();
        }

        // Maak modal
        const modal = document.createElement('div');
        modal.className = 'cart-modal';
        modal.innerHTML = this.getCartModalHTML();
        
        // Voeg styles toe
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        document.body.appendChild(modal);

        // Animeer in
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);

        // Bind modal events
        this.bindModalEvents(modal);
    }

    // Genereer modal HTML
    getCartModalHTML() {
        if (this.cart.length === 0) {
            return `
                <div class="cart-modal-content" style="
                    background: white;
                    border-radius: 12px;
                    padding: 40px;
                    max-width: 500px;
                    width: 90%;
                    text-align: center;
                    position: relative;
                ">
                    <button class="close-modal" style="
                        position: absolute;
                        top: 15px;
                        right: 15px;
                        background: none;
                        border: none;
                        font-size: 24px;
                        cursor: pointer;
                    ">&times;</button>
                    <ion-icon name="bag-outline" style="font-size: 64px; color: #ccc; margin-bottom: 20px;"></ion-icon>
                    <h3 style="margin-bottom: 10px; color: #333;">Je winkelmandje is leeg</h3>
                    <p style="color: #666; margin-bottom: 30px;">Voeg wat producten toe om verder te gaan</p>
                    <button class="btn btn-primary" onclick="window.location.href='shop.php'">Ga naar shop</button>
                </div>
            `;
        }

        const cartItems = this.cart.map(item => `
            <div class="cart-item" style="
                display: flex;
                align-items: center;
                padding: 20px 0;
                border-bottom: 1px solid #eee;
            ">
                <img src="${item.image}" alt="${item.name}" style="
                    width: 80px;
                    height: 80px;
                    object-fit: cover;
                    border-radius: 8px;
                    margin-right: 20px;
                ">
                <div style="flex: 1;">
                    <h4 style="margin: 0 0 10px 0; color: #333;">${item.name}</h4>
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <button class="quantity-btn" data-id="${item.id}" data-action="decrease" style="
                                background: #f0f0f0;
                                border: none;
                                width: 30px;
                                height: 30px;
                                border-radius: 50%;
                                cursor: pointer;
                                font-size: 18px;
                            ">-</button>
                            <span class="quantity" style="font-weight: bold; min-width: 30px; text-align: center;">${item.quantity}</span>
                            <button class="quantity-btn" data-id="${item.id}" data-action="increase" style="
                                background: #f0f0f0;
                                border: none;
                                width: 30px;
                                height: 30px;
                                border-radius: 50%;
                                cursor: pointer;
                                font-size: 18px;
                            ">+</button>
                        </div>
                        <span class="item-price" style="font-weight: bold; color: #4CAF50;">€${(item.price * item.quantity).toFixed(2)}</span>
                        <button class="remove-item" data-id="${item.id}" style="
                            background: #ff4444;
                            color: white;
                            border: none;
                            padding: 8px 12px;
                            border-radius: 6px;
                            cursor: pointer;
                            font-size: 12px;
                        ">Verwijder</button>
                    </div>
                </div>
            </div>
        `).join('');

        return `
            <div class="cart-modal-content" style="
                background: white;
                border-radius: 12px;
                padding: 30px;
                max-width: 600px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
            ">
                <button class="close-modal" style="
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: none;
                    border: none;
                    font-size: 24px;
                    cursor: pointer;
                ">&times;</button>
                
                <h2 style="margin-bottom: 30px; color: #333;">Winkelmandje (${this.cart.length} ${this.cart.length === 1 ? 'item' : 'items'})</h2>
                
                <div class="cart-items">
                    ${cartItems}
                </div>
                
                <div class="cart-summary" style="
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 2px solid #eee;
                ">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h3 style="margin: 0; color: #333;">Totaal:</h3>
                        <span class="total-price" style="font-size: 24px; font-weight: bold; color: #4CAF50;">€${this.getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div style="display: flex; gap: 15px;">
                        <button class="btn btn-secondary" onclick="cart.clearCart()" style="
                            flex: 1;
                            padding: 15px;
                            background: #f0f0f0;
                            color: #333;
                            border: none;
                            border-radius: 8px;
                            cursor: pointer;
                            font-size: 16px;
                        ">Winkelmandje legen</button>
                        <button class="btn btn-primary" onclick="cart.proceedToCheckout()" style="
                            flex: 2;
                            padding: 15px;
                            background: #4CAF50;
                            color: white;
                            border: none;
                            border-radius: 8px;
                            cursor: pointer;
                            font-size: 16px;
                        ">Afrekenen</button>
                    </div>
                </div>
            </div>
        `;
    }

    // Bind modal events
    bindModalEvents(modal) {
        // Close modal
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.classList.contains('close-modal')) {
                modal.style.opacity = '0';
                setTimeout(() => modal.remove(), 300);
            }
        });

        // Quantity buttons
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('quantity-btn')) {
                const id = e.target.dataset.id;
                const action = e.target.dataset.action;
                const currentQuantity = parseInt(e.target.parentElement.querySelector('.quantity').textContent);
                
                if (action === 'increase') {
                    this.updateQuantity(id, currentQuantity + 1);
                } else if (action === 'decrease') {
                    this.updateQuantity(id, currentQuantity - 1);
                }
                
                // Refresh modal
                setTimeout(() => {
                    modal.remove();
                    this.showCartModal();
                }, 100);
            }
        });

        // Remove item
        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-item')) {
                const id = e.target.dataset.id;
                this.removeFromCart(id);
                
                // Refresh modal
                setTimeout(() => {
                    modal.remove();
                    this.showCartModal();
                }, 100);
            }
        });
    }

    // Leeg winkelmandje
    clearCart() {
        this.cart = [];
        this.saveCart();
        this.updateCartCounter();
        this.showNotification('Winkelmandje geleegd');
        
        // Refresh modal
        const modal = document.querySelector('.cart-modal');
        if (modal) {
            setTimeout(() => {
                modal.remove();
                this.showCartModal();
            }, 100);
        }
    }

    // Ga naar checkout (placeholder)
    proceedToCheckout() {
        if (this.cart.length === 0) {
            this.showNotification('Winkelmandje is leeg');
            return;
        }
        
        // Voor nu redirect naar contact pagina als checkout
        this.showNotification('Checkout functionaliteit komt niet!');
        setTimeout(() => {
            window.location.href = 'shop.php';
        }, 2000);
    }
}

// Initialiseer winkelmandje
const cart = new ShoppingCart();

// Export voor gebruik in andere scripts
window.cart = cart;
