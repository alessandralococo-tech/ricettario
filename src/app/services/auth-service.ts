import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user-model';
import { UserService } from './user-service'; // Assicurati di aver creato questo file!

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();
  isLoggedIn$ = new BehaviorSubject<boolean>(false); // Serve per l'header

  constructor(private userService: UserService) {
    // Recupera la sessione se c'è
    const savedSession = localStorage.getItem('current_user');
    if (savedSession) {
      const user = JSON.parse(savedSession);
      this.currentUserSubject.next(user);
      this.isLoggedIn$.next(true);
    }
  }

  // --- LOGIN ---
  login(email: string, pass: string): boolean {
    const user = this.userService.getUserByEmail(email);

    if (user && user.password === pass) {
      this.currentUserSubject.next(user);
      this.isLoggedIn$.next(true);
      localStorage.setItem('current_user', JSON.stringify(user));
      return true;
    }
    return false;
  }

  // --- REGISTRAZIONE (Questa è la funzione che mancava!) ---
  register(name: string, email: string, pass: string): boolean {
    const created = this.userService.createUser(name, email, pass);
    if (created) {
      this.login(email, pass); // Login automatico dopo la registrazione
      return true;
    }
    return false;
  }

  // --- LOGOUT ---
  logout() {
    localStorage.removeItem('current_user');
    this.currentUserSubject.next(null);
    this.isLoggedIn$.next(false);
  }

  // --- CONTROLLO ACCESSO ---
  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }
}