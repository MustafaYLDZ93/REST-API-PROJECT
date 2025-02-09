import { Request, Response } from 'express';
import CartService from '../services/cartService';

const cartService = new CartService();

export class CartController {
  addToCart(req: Request, res: Response) {
    const { productId, quantity } = req.body;
    cartService.addToCart(productId, quantity);
    res.json({ message: 'Product added to cart' });
  }

  getCart(req: Request, res: Response) {
    const cart = cartService.getCart();
    res.json(cart);
  }
}