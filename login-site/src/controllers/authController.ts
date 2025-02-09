import { Request, Response, NextFunction } from 'express';
import AuthService from '../services/authService';

declare module 'express-serve-static-core' {
  interface Request {
    user?: any;
  }
}

const authService = new AuthService();

export class AuthController {
  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    //console.log('Login attempt:', { username, password }); // Debug log
    const isValid = await authService.validateUser(username, password);
    //console.log('Is valid user:', isValid); // Debug log
    if (isValid) {
      const user = await authService.getUsers().then(users => users.find(user => user.username === username));
      const token = authService.generateToken(user!);
      res.json({ message: 'Login successful', token });
    } else {
      res.status(401).json({ message: 'Login failed. Please check your username and password.' });
    }
  }

  async addUser(req: Request, res: Response) {
    const { username, password } = req.body;

    // Check if username is provided
    if (!username) {
      return res.status(400).json({ message: 'Kullanıcı adı gerekli!' });
    }

    // Check if password is provided
    if (!password) {
      return res.status(400).json({ message: 'Şifre gerekli!' });
    }

    const users = await authService.getUsers();

    // Check if username already exists
    if (users.some(user => user.username === username)) {
      return res.status(400).json({ message: 'Bu kullanıcı adı kullanılmakta, başka bir kullanıcı adı seçin.' });
    }

    // Validate username length
    if (username.length < 3) {
      return res.status(400).json({ message: 'Kullanıcı adı en az 4 karakter olmalıdır.' });
    }

    // Validate username for special characters
    const specialCharRegex = /[!@#$%^&*(),?":{}|<>]/;
    if (specialCharRegex.test(username)) {
      return res.status(400).json({ message: 'Kullanıcı adı özel karakter içermemelidir.' });
    }

    // Validate password length
    if (password.length < 6) {
      return res.status(400).json({ message: 'Şifre en az 6 karakter olmalıdır.' });
    }

    // Validate password for special characters
    if (specialCharRegex.test(password)) {
      return res.status(400).json({ message: 'Şifre özel karakter içermemelidir.' });
    }

    const newUser = await authService.addUser(username, password);
    return res.status(201).json({ message: 'User added successfully', id: newUser.id });
  }

  async getUsers(req: Request, res: Response) {
    const users = await authService.getUsers();
    res.json(users);
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    const user = await authService.getUserById(Number(id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { username, password } = req.body;

    // Token'dan elde edilen kullanıcı kimliğini kontrol et
    if (req.user.id !== Number(id)) {
      return res.status(403).json({ message: 'Başka bir kullanıcının bilgilerini güncelleyemezsiniz.' });
    }

    await authService.updateUser(Number(id), username, password);
    res.json({ message: 'User updated successfully' });
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    // Token'dan elde edilen kullanıcı kimliğini kontrol et
    if (req.user.id !== Number(id)) {
      return res.status(403).json({ message: 'Başka bir kullanıcının bilgilerini silemezsiniz.' });
    }

    try {
      await authService.deleteUser(Number(id));
      res.json({ message: 'User deleted successfully' });
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  async verifyToken(req: Request, res: Response, next: NextFunction): Promise<void> {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      res.status(401).json({ message: 'Token is missing' });
      return;
    }
    const decoded = authService.verifyToken(token);
    if (!decoded) {
      res.status(401).json({ message: 'Invalid token' });
      return;
    }
    req.user = decoded;
    next();
  }
}