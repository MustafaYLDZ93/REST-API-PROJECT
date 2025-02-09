const request = require('supertest');
const app = "http://localhost:3000"; 

describe('POST /addUser', () => {
    it('should fail if username is missing', async () => {
        const response = await request(app)
            .post('/addUser')
            .send({
                password: 'ValidPass123'
            });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Kullanıcı adı gerekli!');
    });

    it('should fail if username contains special characters', async () => {
        const response = await request(app)
            .post('/addUser')
            .send({
                username: 'invalid@User',
                password: 'ValidPass123'
            });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Kullanıcı adı özel karakter içermemelidir.');
    });

    it('should fail if password is missing', async () => {
        const response = await request(app)
            .post('/addUser')
            .send({
                username: 'validUser'
            });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Şifre gerekli!');
    });

    it('should fail if username contains special characters', async () => {
        const response = await request(app)
            .post('/addUser')
            .send({
                username: 'invalidUser',
                password: 'invalidPass@123'
            });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Şifre özel karakter içermemelidir.');
    });

    it('should fail if username is too short', async () => {
        const response = await request(app)
            .post('/addUser')
            .send({
                username: 'uz',
                password: 'ValidPass123'
            });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Kullanıcı adı en az 4 karakter olmalıdır.');
    });

    it('should fail if password is too short', async () => {
        const response = await request(app)
            .post('/addUser')
            .send({
                username: 'validUser',
                password: 'short'
            });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Şifre en az 6 karakter olmalıdır.');
    });

    

    it('should fail if username already exists', async () => {
        // İlk olarak, bir kullanıcı oluştur
        const firstResponse = await request(app)
          .post('/addUser')
          .send({
            username: 'admin002',
            password: 'admin002'
          });
        const UserId = firstResponse.body.id;
    
        // Aynı kullanıcıyı tekrar oluşturmaya çalış
        const response = await request(app)
          .post('/addUser')
          .send({
            username: 'admin002',
            password: 'admin002'
          });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Bu kullanıcı adı kullanılmakta, başka bir kullanıcı adı seçin.');
    
        // Oluşturulan kullanıcı ile giriş yap
        const loginResponse = await request(app)
          .post('/login')
          .send({
            username: 'admin002',
            password: 'admin002'
          });
        expect(loginResponse.status).toBe(200);
        const token = loginResponse.body.token;
    
        // Oluşturulan kullanıcıyı sil
        const response2 = await request(app)
          .delete(`/users/${UserId}`)
          .set('Authorization', `Bearer ${token}`);
        expect(response2.status).toBe(200);
        expect(response2.body).toHaveProperty('message', 'User deleted successfully');
     
    });
});