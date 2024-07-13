import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: TaskModel[] = [
    new TaskModel(1, 'ללכת לקניות', true, 'יכול לחכות גם למחר', new Date(), new Date('1/7/2024'))
  ]

  constructor() { }

  deleteTask(id: number) {
    const index = this.tasks.findIndex(item => item.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
