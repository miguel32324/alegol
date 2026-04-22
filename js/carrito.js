class ShoppingCart {
    constructor() {
        this.cart = this.loadCart();
    }

    // Load cart from localStorage
    loadCart() {
        const cartData = localStorage.getItem('shoppingCart');
        return cartData ? JSON.parse(cartData) : [];
    }

    // Save cart to localStorage
    saveCart() {
        localStorage.setItem('shoppingCart', JSON.stringify(this.cart));
    }

    // Add item to cart
    addToCart(item) {
        const existingItem = this.cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            this.cart.push(item);
        }
        this.saveCart();
    }

    // Remove item from cart
    removeFromCart(itemId) {
        this.cart = this.cart.filter(cartItem => cartItem.id !== itemId);
        this.saveCart();
    }

    // Update item quantity
    updateQuantity(itemId, quantity) {
        const existingItem = this.cart.find(cartItem => cartItem.id === itemId);
        if (existingItem) {
            existingItem.quantity = quantity;
        }
        this.saveCart();
    }

    // Get cart items
    getCartItems() {
        return this.cart;
    }

    // Clear cart
    clearCart() {
        this.cart = [];
        this.saveCart();
    }
}

// Example usage:
const shoppingCart = new ShoppingCart();

// Add item to cart
shoppingCart.addToCart({ id: 1, name: 'Product 1', quantity: 1 });

// Remove item from cart
shoppingCart.removeFromCart(1);

// Update item quantity
shoppingCart.updateQuantity(1, 3);

// Get cart items
console.log(shoppingCart.getCartItems());