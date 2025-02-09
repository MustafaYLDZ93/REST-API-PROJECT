import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import setAuthRoutes from '../src/routes/authRoutes';

const app = express();
app.use(bodyParser.json());
setAuthRoutes(app);

describe('AuthController', () => {
  it('should login successfully with correct credentials', async () => {
    const response = await request(app)
      .post('/login')
      .send({ username: 'admin1234', password: 'admin1234' });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Login successful');
  });

  it('should fail to login with incorrect credentials', async () => {
    const response = await request(app)
      .post('/login')
      .send({ username: 'admin1', password: 'wrongpassword' });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Login failed. Please check your username and password.');
  });

  it('should return user by id', async () => {
    const response = await request(app)
      .get('/users/1738333409276');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', 1738333409276);
    expect(response.body).toHaveProperty('username', 'admin1234');
  });

  it('should return 404 for non-existing user', async () => {
    const response = await request(app)
      .get('/users/999');

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('User not found');
  });

  it('should not allow a user to update another user\'s information', async () => {
    // İlk kullanıcı ile giriş yap
    const loginResponse = await request(app)
      .post('/login')
      .send({ username: 'admin1234', password: 'admin1234' });

    expect(loginResponse.status).toBe(200);
    const token = loginResponse.body.token;

    // Başka bir kullanıcının bilgilerini güncellemeye çalış
    const updateResponse = await request(app)
      .patch('/users/1738336137598') // Farklı bir kullanıcı ID'si
      .set('Authorization', `Bearer ${token}`)
      .send({ username: 'admin7777', password: 'admin7777' });

    expect(updateResponse.status).toBe(403);
    expect(updateResponse.body.message).toBe('Başka bir kullanıcının bilgilerini güncelleyemezsiniz.');
  });

  
});