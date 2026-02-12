import { Injectable } from '@angular/core';
import { User } from '../models/user-model';
import { MOCK_USERS } from '../mock-data/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor() {
    const savedUsers = localStorage.getItem('app_users');
    
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    } else {
      this.users = [...MOCK_USERS];
      this.saveUsers();
    }
  }

  // Trova un utente per email
  getUserByEmail(email: string): User | undefined {
    return this.users.find(u => u.email === email);
  }

  // Crea un nuovo utente
  createUser(name: string, email: string, pass: string): boolean {
    if (this.getUserByEmail(email)) {
      return false;
    }

    const newUser: User = {
      id: Date.now().toString(),
      name: name,
      email: email,
      password: pass,
      favorites: []
    };

    this.users.push(newUser);
    this.saveUsers(); // Salva nel browser
    return true;
  }

  // Salva lo stato attuale nel browser
  private saveUsers() {
    localStorage.setItem('app_users', JSON.stringify(this.users));
  }
}