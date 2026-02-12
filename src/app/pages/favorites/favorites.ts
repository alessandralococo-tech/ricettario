import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Recipe } from '../../models/recipe-model';
import { FavoriteService } from '../../services/favorite-service';
import { RecipeCardComponent } from '../../shared/recipe-card/recipe-card';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterModule, RecipeCardComponent], // <--- Aggiunto qui
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.css']
})
export class FavoritesComponent implements OnInit {
  favRecipes: Recipe[] = [];

  constructor(private favService: FavoriteService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites() {
    this.favRecipes = this.favService.getFavorites();
  }
  
  // Questa funzione viene chiamata quando la card emette l'evento onDelete
  removeRecipe(id: string) {
    this.favService.removeFavorite(id);
    this.loadFavorites(); // Ricarica la lista
  }
}