import fs from 'fs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const usersFilePath = './users.json';
const secretKey = 'your_secret_key'; // Güvenli bir anahtar kullanın

interface User {
  id: number;
  username: string;
  password: string;
}

class AuthService {
  private users: User[] = [];

  constructor() {
    this.loadUsers();
  }

  private loadUsers() {
    try {
        if (fs.existsSync(usersFilePath)) {
            const data = fs.readFileSync(usersFilePath, 'utf-8');
            this.users = JSON.parse(data).users || [];
        }
    } catch (error) {
        console.error('Error loading users:', error);
        this.users = [];
    }
}

  async addUser(username: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: User = {
      id: Date.now(),
      username,
      password: hashedPassword
    };
    this.users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify({ users: this.users }, null, 2));
    console.log('User added:', newUser); // Debug log
    return newUser;
  }

  
  async validateUser(username: string, password: string): Promise<boolean> {
    //console.log('Tüm Kullanıcılar:', this.users); 
  
    // Kullanıcıyı bulma
    const user = this.users.find(user => user.username === username);
    //console.log(`Aranan Kullanıcı Adı: "${username}"`);
    //console.log('Bulunan Kullanıcı:', user);
  
    if (!user) {
      //console.log('Kullanıcı bulunamadı!');
      return false;
    }
  
    // Şifreyi kontrol etme
    //console.log('Şifre JSON içinde nasıl kayıtlı?', user.password);
    const isMatch = await bcrypt.compare(password, user.password);
    //console.log('Şifre Eşleşmesi:', isMatch);
  
    return isMatch;
  }

  

  async getUsers(): Promise<User[]> {
    return this.users;
  }

  async getUserById(id: number): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async updateUser(id: number, username: string, password: string): Promise<void> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) throw new Error('User not found');
    const hashedPassword = await bcrypt.hash(password, 10);
    this.users[userIndex] = { id, username, password: hashedPassword };
    fs.writeFileSync(usersFilePath, JSON.stringify({ users: this.users }, null, 2));
  }

  async deleteUser(id: number): Promise<void> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) throw new Error('User not found');
    this.users.splice(userIndex, 1);
    fs.writeFileSync(usersFilePath, JSON.stringify({ users: this.users }, null, 2));
    console.log('User deleted:', id); // Debug log
  }

  generateToken(user: User): string {
    return jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
  }

  verifyToken(token: string): any {
    try {
      return jwt.verify(token, secretKey);
    } catch (err) {
      return null;
    }
  }
}

export default AuthService;