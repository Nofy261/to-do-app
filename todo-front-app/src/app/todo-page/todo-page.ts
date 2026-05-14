import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-todo-page',
  imports: [MatCardModule, MatButtonModule, FormsModule, CommonModule],
  templateUrl: './todo-page.html',
  styleUrl: './todo-page.scss',
})
// export class TodoPage implements OnInit {

//   tasks: Task[] = [];
//   newTask = '';

//   constructor(private taskService: TaskService) {}

//   ngOnInit(): void {
//     this.loadTasks();
//   }

//   loadTasks() {
//     this.taskService.getTasks().subscribe((data) => {
//       this.tasks = data;
//     });
//   }

//   addTask() {
//     if (!this.newTask.trim()) return;

//     const task: Task = {
//       title: this.newTask,
//       done: false
//     };

//     this.taskService.createTask(task).subscribe(() => {
//       this.loadTasks();
//       this.newTask = '';
//     });
//   }

//   deleteTask(index: number) {
//     console.log('backend à faire après');
//   }

//   toggleDone(index: number) {
//     console.log('backend à faire après');
//   }
// }




export class TodoPage implements OnInit {

  tasks: Task[] = [];
  newTask = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    console.log('COMPONENT INIT');
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  addTask() {
    if (!this.newTask.trim()) return;

    const task: Task = {
      title: this.newTask,
      done: false
    };

    this.taskService.createTask(task).subscribe({
      next: (res) => {
        console.log('POST OK:', res);
        this.loadTasks();
        this.newTask = '';
      },
      error: (err) => {
        console.error('POST ERROR:', err);
      }
    });
  }

  deleteTask(index: number) {
    console.log('backend à faire après');
  }

  toggleDone(index: number) {
    console.log('backend à faire après');
  }
}
