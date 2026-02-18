import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Recipe } from '../../models/recipe-model';
import { AuthService } from '../../services/auth-service';
import { FavoriteService } from '../../services/favorite-service';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe-card.html',
  styleUrls: ['./recipe-card.css']
})
export class RecipeCardComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Input() enableDelete: boolean = false;
  @Output() onDelete = new EventEmitter<string>();

  isFavorite: boolean = false;
  showLoginModal: boolean = false;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private favService: FavoriteService
  ) {}

  ngOnInit(): void {
    if (this.recipe) {
      this.isFavorite = this.favService.isFavorite(this.recipe.id);
    }
  }

  onRemoveClick() {
    this.onDelete.emit(this.recipe.id);
  }

  toggleFavorite(event: Event) {
    event.stopPropagation();

    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      if (!isLoggedIn) {
        this.showLoginModal = true;
      } else {
        if (this.isFavorite) {
          // Se era già preferito, lo togliamo
          this.favService.removeFavorite(this.recipe.id);
          this.isFavorite = false;
        } else {
          this.favService.addFavorite(this.recipe);
          this.isFavorite = true;
        }
      }
    });
  }

  closeModal() {
    this.showLoginModal = false;
  }

  goToLogin() {
    this.showLoginModal = false;
    this.router.navigate(['/login']);
  }
}