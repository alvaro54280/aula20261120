import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagListas } from './component/tag-listas/tag-listas';
import { Array } from './component/array/array'; // 

@Component({
  imports: [RouterOutlet, TagListas, Array],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('aula20261120');
}
