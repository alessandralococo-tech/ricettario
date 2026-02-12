import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe-model';
import { Category } from '../models/category-model';
import { MOCK_RECIPES } from '../mock-data/mock-recipes';
import { MOCK_CATEGORIES } from '../mock-data/mock-categories';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    return of(MOCK_RECIPES);
  }

  getRecipeById(id: string): Observable<Recipe | undefined> {
    const recipe = MOCK_RECIPES.find(r => r.id === id);
    return of(recipe);
  }

  getCategories(): Observable<Category[]> {
    return of(MOCK_CATEGORIES);
  }

  getRecipesByCategory(categoryTitle: string): Observable<Recipe[]> {
    // Filtriamo confrontando il titolo della categoria con quello nella ricetta
    const filtered = MOCK_RECIPES.filter(r => r.category === categoryTitle);
    return of(filtered);
  }
}