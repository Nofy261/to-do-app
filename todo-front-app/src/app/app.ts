import { Component, signal } from '@angular/core';
import { TodoPage } from './todo-page/todo-page';


@Component({
  selector: 'app-root',
  imports: [TodoPage ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('todo-front-app');
}
