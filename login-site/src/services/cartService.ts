interface CartItem {
  productId: number;
  quantity: number;
}

class CartService {
  private cart: CartItem[] = [];

  addToCart(productId: number, quantity: number): void {
    const existingItem = this.cart.find(item => item.productId === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({ productId, quantity });
    }
  }

  getCart(): CartItem[] {
    return this.cart;
  }
}

export default CartService;