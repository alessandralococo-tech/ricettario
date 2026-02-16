import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const adminGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  // Verifica se sei loggato e se sei Admin
  if (auth.isAuthenticated() && auth.isAdmin()) {
    return true;
  }
  
  // Se non hai i permessi
  alert('⛔ ACCESSO NEGATO: Area riservata all\'amministratore!');
  router.navigate(['/recipes']);
  return false;
};