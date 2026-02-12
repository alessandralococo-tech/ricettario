export interface User {
  id: string;
  name: string;      // Nome da mostrare (es. "Mario")
  email: string;     // Serve per il login
  password: string;  // Serve per il login
  favorites: string[]; // ID delle ricette preferite dell'utente
}