import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { Recipe } from '../../models/recipe-model';
import { RecipeService } from '../../services/recipe-service';
import { FavoriteService } from '../../services/favorite-service';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe-detail.html',
  styleUrls: ['./recipe-detail.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | undefined;
  isFav: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService,
    private favService: FavoriteService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.recipeService.getRecipeById(id).subscribe(data => {
        this.recipe = data;
        if (this.recipe) {
          this.isFav = this.favService.isFavorite(this.recipe.id);
        }
      });
    }
  }

  toggleFavorite() {
    if (!this.authService.isAuthenticated()) {
      const confirmLogin = confirm("Devi accedere per salvare le ricette! Vuoi fare il login ora?");
      if (confirmLogin) {
        this.router.navigate(['/login']);
      }
      return;
    }

    if (!this.recipe) return;

    if (this.isFav) {
      this.favService.removeFavorite(this.recipe.id);
      this.isFav = false;
    } else {
      this.favService.addFavorite(this.recipe);
      this.isFav = true;
    }
  }
}