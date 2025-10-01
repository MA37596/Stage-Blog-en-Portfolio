// Product Modal System
class ProductModal {
    constructor() {
        this.currentProduct = null;
        this.selectedVariant = null;
        this.bindEvents();
    }

    // Product data met varianten
    productData = {
        'iphone15pro': {
            name: 'iPhone 15 Pro',
            basePrice: 1199,
            variants: {
                colors: [
                    { name: 'Natural Titanium', image: 'assets/images/iphone14.webp', priceModifier: 0 },
                    { name: 'Blue Titanium', image: 'assets/images/iphone14wit.webp', priceModifier: 0 },
                    { name: 'White Titanium', image: 'assets/images/iphone14wit.webp', priceModifier: 0 },
                    { name: 'Black Titanium', image: 'app1.webp', priceModifier: 0 }
                ],
                storage: [
                    { name: '128GB', priceModifier: 0 },
                    { name: '256GB', priceModifier: 150 },
                    { name: '512GB', priceModifier: 350 },
                    { name: '1TB', priceModifier: 550 }
                ]
            },
            defaultColor: 'Natural Titanium',
            defaultStorage: '128GB'
        },
        'samsunggalaxys24': {
            name: 'Samsung Galaxy S24 Ultra',
            basePrice: 1299,
            variants: {
                colors: [
                    { name: 'Titanium Black', image: 'app1.webp', priceModifier: 0 },
                    { name: 'Titanium Gray', image: 'assets/images/iphone14.webp', priceModifier: 0 },
                    { name: 'Titanium Violet', image: 'assets/images/iphone14wit.webp', priceModifier: 0 },
                    { name: 'Titanium Yellow', image: 'app1.webp', priceModifier: 0 }
                ],
                storage: [
                    { name: '256GB', priceModifier: 0 },
                    { name: '512GB', priceModifier: 200 },
                    { name: '1TB', priceModifier: 400 }
                ]
            },
            defaultColor: 'Titanium Black',
            defaultStorage: '256GB'
        },
        'ipadpro': {
            name: 'iPad Pro 12.9"',
            basePrice: 1099,
            variants: {
                colors: [
                    { name: 'Space Gray', image: 'assets/images/product-macbook-air-spacegray.webp', priceModifier: 0 },
                    { name: 'Silver', image: 'assets/images/iphone14wit.webp', priceModifier: 0 }
                ],
                storage: [
                    { name: '256GB', priceModifier: 0 },
                    { name: '512GB', priceModifier: 200 },
                    { name: '1TB', priceModifier: 400 },
                    { name: '2TB', priceModifier: 600 }
                ]
            },
            defaultColor: 'Space Gray',
            defaultStorage: '256GB'
        },
        'macbookairm3': {
            name: 'MacBook Air M3',
            basePrice: 1299,
            variants: {
                colors: [
                    { name: 'Space Gray', image: 'assets/images/product-macbook-air-spacegray.webp', priceModifier: 0 },
                    { name: 'Silver', image: 'assets/images/product-macbook-air-spacegray.webp', priceModifier: 0 },
                    { name: 'Starlight', image: 'assets/images/product-macbook-air-spacegray.webp', priceModifier: 0 },
                    { name: 'Midnight', image: 'assets/images/product-macbook-air-spacegray.webp', priceModifier: 0 }
                ],
                storage: [
                    { name: '256GB', priceModifier: 0 },
                    { name: '512GB', priceModifier: 250 },
                    { name: '1TB', priceModifier: 500 },
                    { name: '2TB', priceModifier: 750 }
                ],
                memory: [
                    { name: '8GB', priceModifier: 0 },
                    { name: '16GB', priceModifier: 200 },
                    { name: '24GB', priceModifier: 400 }
                ]
            },
            defaultColor: 'Space Gray',
            defaultStorage: '256GB',
            defaultMemory: '8GB'
        },
        'airpodspro': {
            name: 'AirPods Pro (2nd gen)',
            basePrice: 279,
            variants: {
                colors: [
                    { name: 'White', image: 'assets/images/beats.webp', priceModifier: 0 }
                ],
                storage: [
                    { name: 'Standard', priceModifier: 0 },
                    { name: 'USB-C Case', priceModifier: 30 }
                ]
            },
            defaultColor: 'White',
            defaultStorage: 'Standard'
        },
        'samsungbuds': {
            name: 'Samsung Galaxy Buds2 Pro',
            basePrice: 229,
            variants: {
                colors: [
                    { name: 'Graphite', image: 'assets/images/beats.webp', priceModifier: 0 },
                    { name: 'White', image: 'assets/images/beats.webp', priceModifier: 0 },
                    { name: 'Bora Purple', image: 'assets/images/beats.webp', priceModifier: 0 }
                ],
                storage: [
                    { name: 'Standard', priceModifier: 0 }
                ]
            },
            defaultColor: 'Graphite',
            defaultStorage: 'Standard'
        },
        'imacm3': {
            name: 'iMac 24" M3',
            basePrice: 1599,
            variants: {
                colors: [
                    { name: 'Blue', image: 'assets/images/imac-silver.webp', priceModifier: 0 },
                    { name: 'Green', image: 'assets/images/imac-silver.webp', priceModifier: 0 },
                    { name: 'Pink', image: 'assets/images/imac-silver.webp', priceModifier: 0 },
                    { name: 'Silver', image: 'assets/images/imac-silver.webp', priceModifier: 0 },
                    { name: 'Yellow', image: 'assets/images/imac-silver.webp', priceModifier: 0 },
                    { name: 'Orange', image: 'assets/images/imac-silver.webp', priceModifier: 0 },
                    { name: 'Purple', image: 'assets/images/imac-silver.webp', priceModifier: 0 }
                ],
                storage: [
                    { name: '256GB', priceModifier: 0 },
                    { name: '512GB', priceModifier: 300 },
                    { name: '1TB', priceModifier: 600 }
                ],
                memory: [
                    { name: '8GB', priceModifier: 0 },
                    { name: '16GB', priceModifier: 200 },
                    { name: '24GB', priceModifier: 400 }
                ]
            },
            defaultColor: 'Blue',
            defaultStorage: '256GB',
            defaultMemory: '8GB'
        },
        'applewatch': {
            name: 'Apple Watch Series 9',
            basePrice: 449,
            variants: {
                colors: [
                    { name: 'Pink', image: 'app1.webp', priceModifier: 0 },
                    { name: 'Starlight', image: 'assets/images/iphone14wit.webp', priceModifier: 0 },
                    { name: 'Midnight', image: 'app1.webp', priceModifier: 0 },
                    { name: 'Red', image: 'assets/images/iphone14.webp', priceModifier: 0 }
                ],
                storage: [
                    { name: '41mm', priceModifier: 0 },
                    { name: '45mm', priceModifier: 50 }
                ]
            },
            defaultColor: 'Pink',
            defaultStorage: '41mm'
        }
    };

    // Bind events
    bindEvents() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.action-btn[aria-label="quick view"]')) {
                e.preventDefault();
                const button = e.target.closest('.action-btn[aria-label="quick view"]');
                const productCard = button.closest('.product-card');
                const productId = this.getProductIdFromCard(productCard);
                
                if (productId) {
                    this.showModal(productId);
                }
            }
        });

        // Close modal events
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('product-modal') || e.target.classList.contains('close-modal')) {
                this.hideModal();
            }
        });

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideModal();
            }
        });
    }

    // Get product ID from card
    getProductIdFromCard(productCard) {
        // Try to find existing add-to-cart button with product ID
        const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
        if (addToCartBtn && addToCartBtn.dataset.productId) {
            return addToCartBtn.dataset.productId;
        }

        // Fallback: try to determine from product title
        const titleElement = productCard.querySelector('.card-title');
        if (titleElement) {
            const title = titleElement.textContent.toLowerCase().trim();
            if (title.includes('iphone 15 pro')) return 'iphone15pro';
            if (title.includes('samsung galaxy s24')) return 'samsunggalaxys24';
            if (title.includes('ipad pro')) return 'ipadpro';
            if (title.includes('macbook air')) return 'macbookairm3';
            if (title.includes('airpods pro')) return 'airpodspro';
            if (title.includes('samsung galaxy buds')) return 'samsungbuds';
            if (title.includes('imac')) return 'imacm3';
            if (title.includes('apple watch')) return 'applewatch';
        }

        return null;
    }

    // Show modal
    showModal(productId) {
        this.currentProduct = this.productData[productId];
        if (!this.currentProduct) return;

        // Set default variant
        this.selectedVariant = {
            color: this.currentProduct.defaultColor,
            storage: this.currentProduct.defaultStorage,
            memory: this.currentProduct.defaultMemory || null
        };

        // Remove existing modal
        const existingModal = document.querySelector('.product-modal');
        if (existingModal) {
            existingModal.remove();
        }

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'product-modal';
        modal.innerHTML = this.getModalHTML(productId);
        
        // Add to DOM
        document.body.appendChild(modal);

        // Animate in
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);

        // Bind modal events
        this.bindModalEvents(modal, productId);
    }

    // Hide modal
    hideModal() {
        const modal = document.querySelector('.product-modal');
        if (modal) {
            modal.style.opacity = '0';
            setTimeout(() => modal.remove(), 300);
        }
    }

    // Get modal HTML
    getModalHTML(productId) {
        const product = this.currentProduct;
        const selectedColor = this.selectedVariant.color;
        const selectedStorage = this.selectedVariant.storage;
        const selectedMemory = this.selectedVariant.memory;

        // Get selected color image
        const selectedColorData = product.variants.colors.find(c => c.name === selectedColor);
        const productImage = selectedColorData ? selectedColorData.image : 'app1.webp';

        // Calculate current price
        const currentPrice = this.calculatePrice();

        return `
            <div class="product-modal" style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                z-index: 10000;
                display: flex;
                justify-content: center;
                align-items: center;
                opacity: 0;
                transition: opacity 0.3s ease;
                padding: 20px;
            ">
                <div class="modal-content" style="
                    background: white;
                    border-radius: 20px;
                    max-width: 900px;
                    width: 100%;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                    animation: modalSlideIn 0.3s ease;
                ">
                    <button class="close-modal" style="
                        position: absolute;
                        top: 20px;
                        right: 20px;
                        background: rgba(0,0,0,0.5);
                        color: white;
                        border: none;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        cursor: pointer;
                        font-size: 20px;
                        z-index: 10;
                    ">&times;</button>

                    <div class="modal-body" style="display: flex; gap: 40px; padding: 40px;">
                        <div class="product-image-section" style="flex: 1;">
                            <div class="main-image" style="
                                background: #f8f9fa;
                                border-radius: 16px;
                                padding: 40px;
                                text-align: center;
                                margin-bottom: 20px;
                            ">
                                <img src="${productImage}" alt="${product.name}" style="
                                    max-width: 100%;
                                    height: 400px;
                                    object-fit: contain;
                                    border-radius: 12px;
                                ">
                            </div>
                            
                            <div class="color-options" style="margin-bottom: 20px;">
                                <h4 style="margin-bottom: 15px; color: #333;">Kleur:</h4>
                                <div class="color-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); gap: 10px;">
                                    ${product.variants.colors.map(color => `
                                        <button class="color-option ${color.name === selectedColor ? 'selected' : ''}" 
                                                data-color="${color.name}" 
                                                style="
                                                    padding: 12px;
                                                    border: 2px solid ${color.name === selectedColor ? '#007AFF' : '#e0e0e0'};
                                                    border-radius: 12px;
                                                    background: white;
                                                    cursor: pointer;
                                                    transition: all 0.2s ease;
                                                    text-align: center;
                                                    font-size: 12px;
                                                ">
                                            <div style="
                                                width: 30px;
                                                height: 30px;
                                                border-radius: 50%;
                                                background: ${this.getColorValue(color.name)};
                                                margin: 0 auto 8px auto;
                                                border: 2px solid #fff;
                                                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                                            "></div>
                                            ${color.name}
                                        </button>
                                    `).join('')}
                                </div>
                            </div>
                        </div>

                        <div class="product-info-section" style="flex: 1;">
                            <h2 style="margin-bottom: 10px; color: #333; font-size: 28px;">${product.name}</h2>
                            <p style="color: #666; margin-bottom: 30px; line-height: 1.6;">
                                Ontdek de nieuwste technologie met ${product.name}. Perfect voor dagelijks gebruik met geavanceerde functies en premium design.
                            </p>

                            <div class="storage-options" style="margin-bottom: 20px;">
                                <h4 style="margin-bottom: 15px; color: #333;">Opslag:</h4>
                                <div class="storage-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 10px;">
                                    ${product.variants.storage.map(storage => `
                                        <button class="storage-option ${storage.name === selectedStorage ? 'selected' : ''}" 
                                                data-storage="${storage.name}" 
                                                style="
                                                    padding: 15px;
                                                    border: 2px solid ${storage.name === selectedStorage ? '#007AFF' : '#e0e0e0'};
                                                    border-radius: 12px;
                                                    background: white;
                                                    cursor: pointer;
                                                    transition: all 0.2s ease;
                                                    text-align: center;
                                                    font-weight: bold;
                                                ">
                                            ${storage.name}
                                        </button>
                                    `).join('')}
                                </div>
                            </div>

                            ${product.variants.memory ? `
                                <div class="memory-options" style="margin-bottom: 20px;">
                                    <h4 style="margin-bottom: 15px; color: #333;">Geheugen:</h4>
                                    <div class="memory-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 10px;">
                                        ${product.variants.memory.map(memory => `
                                            <button class="memory-option ${memory.name === selectedMemory ? 'selected' : ''}" 
                                                    data-memory="${memory.name}" 
                                                    style="
                                                        padding: 15px;
                                                        border: 2px solid ${memory.name === selectedMemory ? '#007AFF' : '#e0e0e0'};
                                                        border-radius: 12px;
                                                        background: white;
                                                        cursor: pointer;
                                                        transition: all 0.2s ease;
                                                        text-align: center;
                                                        font-weight: bold;
                                                    ">
                                                ${memory.name}
                                            </button>
                                        `).join('')}
                                    </div>
                                </div>
                            ` : ''}

                            <div class="price-section" style="
                                background: #f8f9fa;
                                padding: 25px;
                                border-radius: 16px;
                                margin-bottom: 30px;
                            ">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span style="font-size: 18px; color: #666;">Totaalprijs:</span>
                                    <span class="total-price" style="font-size: 32px; font-weight: bold; color: #007AFF;">€${currentPrice}</span>
                                </div>
                                <div style="margin-top: 10px; font-size: 14px; color: #666;">
                                    ${this.getPriceBreakdown()}
                                </div>
                            </div>

                            <div class="action-buttons" style="display: flex; gap: 15px;">
                                <button class="btn btn-primary add-to-cart-modal" style="
                                    flex: 1;
                                    padding: 18px;
                                    background: #007AFF;
                                    color: white;
                                    border: none;
                                    border-radius: 12px;
                                    cursor: pointer;
                                    font-size: 16px;
                                    font-weight: bold;
                                    transition: all 0.2s ease;
                                ">
                                    <ion-icon name="bag-handle-outline" style="margin-right: 8px;"></ion-icon>
                                    Toevoegen aan winkelmandje
                                </button>
                                <button class="btn btn-secondary wishlist-btn" style="
                                    padding: 18px;
                                    background: #f0f0f0;
                                    color: #333;
                                    border: none;
                                    border-radius: 12px;
                                    cursor: pointer;
                                    font-size: 16px;
                                    transition: all 0.2s ease;
                                ">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </button>
                            </div>

                            <div class="features" style="margin-top: 30px;">
                                <h4 style="margin-bottom: 15px; color: #333;">Belangrijkste functies:</h4>
                                <ul style="list-style: none; padding: 0;">
                                    <li style="padding: 8px 0; color: #666; border-bottom: 1px solid #f0f0f0;">
                                        <ion-icon name="checkmark-circle" style="color: #4CAF50; margin-right: 10px;"></ion-icon>
                                        Premium kwaliteit en duurzaamheid
                                    </li>
                                    <li style="padding: 8px 0; color: #666; border-bottom: 1px solid #f0f0f0;">
                                        <ion-icon name="checkmark-circle" style="color: #4CAF50; margin-right: 10px;"></ion-icon>
                                        Geavanceerde technologie
                                    </li>
                                    <li style="padding: 8px 0; color: #666; border-bottom: 1px solid #f0f0f0;">
                                        <ion-icon name="checkmark-circle" style="color: #4CAF50; margin-right: 10px;"></ion-icon>
                                        1 jaar garantie inbegrepen
                                    </li>
                                    <li style="padding: 8px 0; color: #666;">
                                        <ion-icon name="checkmark-circle" style="color: #4CAF50; margin-right: 10px;"></ion-icon>
                                        Gratis verzending
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Get color value for display
    getColorValue(colorName) {
        const colorMap = {
            'Space Black': '#1C1C1E',
            'Silver': '#F2F2F7',
            'Gold': '#FFD700',
            'Deep Purple': '#8E44AD',
            'Natural Titanium': '#8F8F8F',
            'Blue Titanium': '#5DADE2',
            'White Titanium': '#FFFFFF',
            'Black Titanium': '#2C2C2E',
            'Titanium Black': '#2C2C2E',
            'Titanium Gray': '#8F8F8F',
            'Titanium Violet': '#8E44AD',
            'Titanium Yellow': '#FFD60A',
            'Black': '#000000',
            'Blue': '#007AFF',
            'Green': '#34C759',
            'Yellow': '#FFD60A',
            'Pink': '#FF2D92',
            'Space Gray': '#8E8E93',
            'Starlight': '#F2F2F7',
            'Midnight': '#1C1C1E',
            'White': '#FFFFFF',
            'Graphite': '#36454F',
            'Bora Purple': '#8E44AD',
            'Orange': '#FF9500',
            'Purple': '#8E44AD',
            'Red': '#FF3B30'
        };
        return colorMap[colorName] || '#CCCCCC';
    }

    // Calculate current price
    calculatePrice() {
        const product = this.currentProduct;
        let totalPrice = product.basePrice;

        // Add color modifier
        const selectedColorData = product.variants.colors.find(c => c.name === this.selectedVariant.color);
        if (selectedColorData) {
            totalPrice += selectedColorData.priceModifier;
        }

        // Add storage modifier
        const selectedStorageData = product.variants.storage.find(s => s.name === this.selectedVariant.storage);
        if (selectedStorageData) {
            totalPrice += selectedStorageData.priceModifier;
        }

        // Add memory modifier
        if (this.selectedVariant.memory && product.variants.memory) {
            const selectedMemoryData = product.variants.memory.find(m => m.name === this.selectedVariant.memory);
            if (selectedMemoryData) {
                totalPrice += selectedMemoryData.priceModifier;
            }
        }

        return totalPrice;
    }

    // Get price breakdown
    getPriceBreakdown() {
        const product = this.currentProduct;
        let breakdown = `Basisprijs: €${product.basePrice}`;

        const selectedColorData = product.variants.colors.find(c => c.name === this.selectedVariant.color);
        if (selectedColorData && selectedColorData.priceModifier > 0) {
            breakdown += ` + ${this.selectedVariant.color}: €${selectedColorData.priceModifier}`;
        }

        const selectedStorageData = product.variants.storage.find(s => s.name === this.selectedVariant.storage);
        if (selectedStorageData && selectedStorageData.priceModifier > 0) {
            breakdown += ` + ${this.selectedVariant.storage}: €${selectedStorageData.priceModifier}`;
        }

        if (this.selectedVariant.memory && product.variants.memory) {
            const selectedMemoryData = product.variants.memory.find(m => m.name === this.selectedVariant.memory);
            if (selectedMemoryData && selectedMemoryData.priceModifier > 0) {
                breakdown += ` + ${this.selectedVariant.memory}: €${selectedMemoryData.priceModifier}`;
            }
        }

        return breakdown;
    }

    // Bind modal events
    bindModalEvents(modal, productId) {
        // Color selection
        modal.addEventListener('click', (e) => {
            if (e.target.closest('.color-option')) {
                const button = e.target.closest('.color-option');
                const color = button.dataset.color;
                this.selectedVariant.color = color;
                
                // Update UI
                modal.querySelectorAll('.color-option').forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
                
                // Update image
                const selectedColorData = this.currentProduct.variants.colors.find(c => c.name === color);
                if (selectedColorData) {
                    const mainImage = modal.querySelector('.main-image img');
                    mainImage.src = selectedColorData.image;
                }
                
                // Update price
                this.updatePrice(modal);
            }
        });

        // Storage selection
        modal.addEventListener('click', (e) => {
            if (e.target.closest('.storage-option')) {
                const button = e.target.closest('.storage-option');
                const storage = button.dataset.storage;
                this.selectedVariant.storage = storage;
                
                // Update UI
                modal.querySelectorAll('.storage-option').forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
                
                // Update price
                this.updatePrice(modal);
            }
        });

        // Memory selection
        modal.addEventListener('click', (e) => {
            if (e.target.closest('.memory-option')) {
                const button = e.target.closest('.memory-option');
                const memory = button.dataset.memory;
                this.selectedVariant.memory = memory;
                
                // Update UI
                modal.querySelectorAll('.memory-option').forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
                
                // Update price
                this.updatePrice(modal);
            }
        });

        // Add to cart
        modal.addEventListener('click', (e) => {
            if (e.target.closest('.add-to-cart-modal')) {
                const productName = `${this.currentProduct.name} - ${this.selectedVariant.color} - ${this.selectedVariant.storage}${this.selectedVariant.memory ? ` - ${this.selectedVariant.memory}` : ''}`;
                const productPrice = this.calculatePrice();
                const selectedColorData = this.currentProduct.variants.colors.find(c => c.name === this.selectedVariant.color);
                const productImage = selectedColorData ? selectedColorData.image : 'app1.webp';
                
                // Add to cart using the existing cart system
                if (window.cart) {
                    window.cart.addToCart(productId, productName, productPrice, productImage);
                }
                
                // Close modal
                this.hideModal();
            }
        });
    }

    // Update price display
    updatePrice(modal) {
        const currentPrice = this.calculatePrice();
        const totalPriceElement = modal.querySelector('.total-price');
        const breakdownElement = modal.querySelector('.price-section div:last-child');
        
        if (totalPriceElement) {
            totalPriceElement.textContent = `€${currentPrice}`;
        }
        
        if (breakdownElement) {
            breakdownElement.textContent = this.getPriceBreakdown();
        }
    }
}

// Initialize product modal
const productModal = new ProductModal();

// Export for use in other scripts
window.productModal = productModal;
