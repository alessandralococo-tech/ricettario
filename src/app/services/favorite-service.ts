import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe-model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favorites: Recipe[] = [];

  constructor() {
    this.loadFromStorage();
  }

  getFavorites(): Recipe[] {
    return this.favorites;
  }

  addFavorite(recipe: Recipe) {
    // Controlla se esiste già per non duplicarla
    if (!this.isFavorite(recipe.id)) {
      this.favorites.push(recipe);
      this.saveToStorage();
    }
  }

  // Rimuove una ricetta
  removeFavorite(recipeId: string) {
    this.favorites = this.favorites.filter(r => r.id !== recipeId);
    this.saveToStorage();
  }

  // Controlla se è già nei preferiti
  isFavorite(recipeId: string): boolean {
    return this.favorites.some(r => r.id === recipeId);
  }

  // Salva nel browser
  private saveToStorage() {
    localStorage.setItem('my_favorites', JSON.stringify(this.favorites));
  }

  // Carica dal browser
  private loadFromStorage() {
    const data = localStorage.getItem('my_favorites');
    if (data) {
      this.favorites = JSON.parse(data);
    }
  }
}