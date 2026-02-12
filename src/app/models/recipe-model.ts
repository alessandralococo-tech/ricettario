export interface Ingredient {
  ingredient: string;
  measure: string;
}

export interface Recipe {
  id: string;
  title: string;
  category: string;
  area: string;
  thumbnail: string;
  instructions: string;
  ingredients: Ingredient[];
}