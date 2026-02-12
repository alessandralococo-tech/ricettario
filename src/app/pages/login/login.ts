import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], 
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email: string = '';
  pass: string = '';
  errorMsg: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    // Pulisce errori precedenti
    this.errorMsg = '';

    // Validazione base
    if (!this.email || !this.pass) {
      this.errorMsg = 'Per favore, inserisci email e password.';
      return;
    }

    const success = this.authService.login(this.email, this.pass);

    if (success) {
      this.router.navigate(['/recipes']);
    } else {
      this.errorMsg = 'Email o password non corretti. Riprova.';
    }
  }
}