import { Component } from '@angular/core';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TaskModel } from '../models/task.model';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskDetailsComponent, MatCardModule, MatButtonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  taskList: TaskModel[];

  constructor(private tasksService: TasksService) {
    this.taskList = this.tasksService.tasks;
  }

  deleteTask(task: TaskModel){
    debugger;
    this.tasksService.deleteTask(task.id);
    this.updateData();
  }

  updateData(){
    this.taskList = this.tasksService.tasks;
  }
}
