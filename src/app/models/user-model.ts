export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  favorites: string[];
  role?: 'admin' | 'user';
}