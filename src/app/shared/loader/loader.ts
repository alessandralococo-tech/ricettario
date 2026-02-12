import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  template: `<div class="loader">Caricamento in corso...</div>`,
  styles: [`
    .loader { font-size: 1.2rem; color: #666; text-align: center; padding: 20px; }
  `]
})
export class LoaderComponent {}