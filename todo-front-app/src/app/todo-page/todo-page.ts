import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-page',
  imports: [MatCardModule, MatButtonModule, FormsModule],
  templateUrl: './todo-page.html',
  styleUrl: './todo-page.scss',
})
export class TodoPage implements OnInit {

  tasks: Task[] = [];
  newTask = '';

  constructor(
    private taskService: TaskService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = [...data];
      this.cdr.detectChanges();
    });
  }

  addTask() {
    if (!this.newTask.trim()) return;

    const task: Task = {
      title: this.newTask,
      done: false
    };

    this.taskService.createTask(task).subscribe(() => {
      this.loadTasks();
      this.newTask = '';
    });
  }

  deleteTask(index: number) {
    const id = this.tasks[index].id;

    if (id === undefined) return;

    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }

  toggleDone(i: number) {

    const task = this.tasks[i];

    const updatedTask = {
      ...task,
      done: !task.done
    };
    
    if (task.id === undefined) return;

    this.taskService.toggleDone(task.id, updatedTask).subscribe(() => {
      this.loadTasks();
    });
  }
}


// fichier de logique front 

