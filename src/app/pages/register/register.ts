import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  pass: string = '';
  errorMsg: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    if (!this.name || !this.email || !this.pass) {
      this.errorMsg = 'Compila tutti i campi!';
      return;
    }

    const success = this.authService.register(this.name, this.email, this.pass);
    
    if (success) {
      alert('Registrazione avvenuta con successo! Benvenuto ' + this.name);
      this.router.navigate(['/recipes']);
    } else {
      this.errorMsg = 'Questa email è già registrata.';
    }
  }
}