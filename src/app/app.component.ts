import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClothAddComponent } from './cloth-add/cloth-add.component';
import { ClothListComponent } from './cloth-list/cloth-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClothAddComponent, ClothListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'textilia-frontend';
}
