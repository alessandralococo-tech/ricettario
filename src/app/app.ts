import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header-component/header-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.html', // <--- CORRETTO QUI
  styleUrls: ['./app.css']   // <--- CORRETTO QUI
})
export class AppComponent {
  title = 'ricettario-app';
}