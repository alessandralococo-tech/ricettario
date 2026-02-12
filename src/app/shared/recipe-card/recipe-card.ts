import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Recipe } from '../../models/recipe-model';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './recipe-card.html',
  styleUrls: ['./recipe-card.css']
})
export class RecipeCardComponent {
  // Riceve la ricetta dal padre
  @Input() recipe!: Recipe;
  
  // Se true mostra il tasto rimuovi (per la pagina preferiti)
  @Input() enableDelete: boolean = false;

  // Manda un segnale al padre quando si clicca rimuovi
  @Output() onDelete = new EventEmitter<string>();

  onRemoveClick() {
    this.onDelete.emit(this.recipe.id);
  }
}