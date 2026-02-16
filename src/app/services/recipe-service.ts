import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Recipe } from '../models/recipe-model';
import { Category } from '../models/category-model';
import { MOCK_RECIPES } from '../mock-data/mock-recipes';
import { MOCK_CATEGORIES } from '../mock-data/mock-categories';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [...MOCK_RECIPES];
  
  private recipesSubject = new BehaviorSubject<Recipe[]>(this.recipes);

  constructor() { }

  // --- LETTURA ---
  getRecipes(): Observable<Recipe[]> {
    return this.recipesSubject.asObservable();
  }

  getRecipeById(id: string): Observable<Recipe | undefined> {
    const recipe = this.recipes.find(r => r.id === id);
    return of(recipe);
  }

  getCategories(): Observable<Category[]> {
    return of(MOCK_CATEGORIES);
  }

  getRecipesByCategory(categoryTitle: string): Observable<Recipe[]> {
    const filtered = this.recipes.filter(r => r.category === categoryTitle);
    return of(filtered);
  }


  // --- SCRITTURA ---
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesSubject.next(this.recipes); // nuova lista aggiornata
  }

  // Modifica
  updateRecipe(updatedRecipe: Recipe) {
    const index = this.recipes.findIndex(r => r.id === updatedRecipe.id);
    if (index !== -1) {
      this.recipes[index] = updatedRecipe;
      this.recipesSubject.next(this.recipes);
    }
  }

  // Elimina
  deleteRecipe(id: string) {
    this.recipes = this.recipes.filter(r => r.id !== id);
    this.recipesSubject.next(this.recipes);
  }
}