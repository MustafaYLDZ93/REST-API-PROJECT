import { Express } from 'express';
import { AuthController } from '../controllers/authController';
import { ProductController } from '../controllers/productController';
import { CartController } from '../controllers/cartController';

const authController = new AuthController();
const productController = new ProductController();
const cartController = new CartController();

const setAuthRoutes = (app: Express) => {
  app.get('/login', (req, res) => {
    res.render('login');
  });

  app.post('/login', (req, res) => {
    authController.login(req, res);
  });

  app.post('/addUser', (req, res) => {
    authController.addUser(req, res);
  });

  app.get('/users', (req, res) => {
    authController.getUsers(req, res);
  });

  app.get('/users/:id', (req, res) => {
    authController.getUserById(req, res);
  });

  app.patch('/users/:id', authController.verifyToken, (req, res) => {
    authController.updateUser(req, res);
  });

  app.put('/users/:id', authController.verifyToken, (req, res) => {
    authController.updateUser(req, res);
  });

  app.delete('/users/:id', authController.verifyToken, (req, res) => {
    authController.deleteUser(req, res);
  });

  app.get('/products-cart', (req, res) => {
    res.render('products-cart');
  });

  // Ürün ve Sepet Rotaları
  app.get('/products', (req, res) => {
    productController.getProducts(req, res);
  });

  app.post('/cart/items', (req, res) => {
    cartController.addToCart(req, res);
  });

  app.get('/cart/items', (req, res) => {
    cartController.getCart(req, res);
  });
};

export default setAuthRoutes;