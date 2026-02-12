import { Routes } from '@angular/router';
import { RecipeListComponent } from './pages/recipe-list/recipe-list';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail';
import { FavoritesComponent } from './pages/favorites/favorites';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register'; 

export const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipes/:id', component: RecipeDetailComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent } 
];