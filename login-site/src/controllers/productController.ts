import { Request, Response } from 'express';
import ProductService from '../services/productService';

const productService = new ProductService();

export class ProductController {
  getProducts(req: Request, res: Response) {
    const products = productService.getProducts();
    res.json(products);
  }
}