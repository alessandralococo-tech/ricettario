import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe-service';
import { Recipe } from '../../models/recipe-model';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css']
})
export class AdminDashboardComponent implements OnInit {
  recipes: Recipe[] = [];
  
  isFormVisible: boolean = false;
  editingRecipe: Recipe | null = null;

  formModel: any = { 
    title: '', 
    category: 'Beef', 
    instructions: '',
    thumbnail: '',
    area: 'Italian' 
  };

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data;
    });
  }

  // --- AZIONI ---

  openNew() {
    this.editingRecipe = null;
    this.formModel = { 
      title: '', 
      category: 'Beef', 
      instructions: '', 
      thumbnail: 'https://via.placeholder.com/150', 
      area: 'Italian' 
    };
    this.isFormVisible = true;
  }

  openEdit(recipe: Recipe) {
    this.editingRecipe = recipe;
    this.formModel = { ...recipe }; 
    this.isFormVisible = true;
  }

  deleteRecipe(id: string) {
    if(confirm('Sei sicuro di voler eliminare questa ricetta?')) {
      this.recipeService.deleteRecipe(id);
    }
  }

  save() {
    if (this.editingRecipe) {
      // UPDATE
      const updatedRecipe: Recipe = {
        ...this.editingRecipe,
        ...this.formModel
      };
      this.recipeService.updateRecipe(updatedRecipe);
    } else {
      // CREATE
      const newRecipe: Recipe = {
        ...this.formModel,
        id: Date.now().toString(),
        ingredients: []
      };
      this.recipeService.addRecipe(newRecipe);
    }
    this.isFormVisible = false;
  }
}