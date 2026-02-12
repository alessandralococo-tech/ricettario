import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipe } from '../../models/recipe-model';
import { Category } from '../../models/category-model';
import { RecipeService } from '../../services/recipe-service';
import { RecipeCardComponent } from '../../shared/recipe-card/recipe-card';
import { LoaderComponent } from '../../shared/loader/loader';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, RecipeCardComponent, LoaderComponent],
  templateUrl: './recipe-list.html',
  styleUrls: ['./recipe-list.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  categories: Category[] = [];
  selectedCategory: string = 'All';
  isLoading: boolean = true;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.getCategories().subscribe((cats: Category[]) => {
      this.categories = cats;
    });

    this.loadAllRecipes();
  }

  loadAllRecipes() {
    this.isLoading = true;
    this.recipeService.getRecipes().subscribe((data: Recipe[]) => {
      this.recipes = data;
      this.isLoading = false;
    });
  }

  filterRecipes(categoryTitle: string) {
    this.selectedCategory = categoryTitle;
    this.isLoading = true;

    if (categoryTitle === 'All') {
      this.loadAllRecipes();
    } else {
      this.recipeService.getRecipesByCategory(categoryTitle).subscribe((data: Recipe[]) => {
        this.recipes = data;
        this.isLoading = false;
      });
    }
  }
}