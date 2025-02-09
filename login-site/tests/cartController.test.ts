import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import setAuthRoutes from '../src/routes/authRoutes';

const app = express();
app.use(bodyParser.json());
setAuthRoutes(app);

describe('CartController', () => {
  it('should add a product to the cart ID 1', async () => {
    const response = await request(app)
      .post('/cart/items')
      .send({ productId: 1, quantity: 2 })
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Product added to cart');
  });

  it('should add a product to the cart ID 1', async () => {
    const response = await request(app)
      .post('/cart/items')
      .send({ productId: 1, quantity: 2 })
      .set('Content-Type', 'application/json');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Product added to cart');
  });

  it('should return the cart with added products ID 2', async () => {
    // Add a product to the cart first
    await request(app)
      .post('/cart/items')
      .send({ productId: 2, quantity: 2 })
      .set('Content-Type', 'application/json');

    const response = await request(app)
      .get('/cart/items');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ productId: 1, quantity: 4 }),
        expect.objectContaining({ productId: 2, quantity: 2 })  
      ])
    );
  });
});