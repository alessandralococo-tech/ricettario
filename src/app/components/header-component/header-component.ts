import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header-component.html',
  styleUrls: ['./header-component.css']
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  isAdmin: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    
    //Controllo se è loggato
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });

    // Controllo chi è loggato
    this.authService.currentUser$.subscribe(user => {
      this.isAdmin = user?.role === 'admin';
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/recipes']);
  }
}