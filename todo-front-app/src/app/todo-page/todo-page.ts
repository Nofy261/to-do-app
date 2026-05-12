import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-todo-page',
  imports: [MatCardModule, MatButtonModule, FormsModule],
  templateUrl: './todo-page.html',
  styleUrl: './todo-page.scss',
})
export class TodoPage implements OnInit {

  tasks: Task[] = [];
  newTask = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  addTask() {
    console.log('backend à faire après');
  }

  deleteTask(index: number) {
    console.log('backend à faire après');
  }

  toggleDone(index: number) {
    console.log('backend à faire après');
  }
}





// export class TodoPage {
//   tasks = [
//     { title: 'Courrir 1h30', done: false },
//     { title: 'Faire les courses', done: false },
//     { title: 'Lire un livre', done: false },  
//   ];
//   newTask = '';

//   addTask() {
//     if (!this.newTask.trim()) return;

//     this.tasks.push({
//       title: this.newTask,
//       done: false
//     });

//     this.newTask = '';
//   }

//   deleteTask(index: number) {
//     this.tasks.splice(index, 1);
//   }

//   toggleDone(index: number) {
//     this.tasks[index].done = !this.tasks[index].done
//   }
// }



