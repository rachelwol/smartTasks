import { Component, Inject, OnChanges, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TaskModel } from '../models/task.model';

@Component({
  selector: 'app-edit-task-dialog',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,
    MatDatepickerModule, MatNativeDateModule],
  templateUrl: './edit-task-dialog.component.html',
  styleUrl: './edit-task-dialog.component.scss'
})
export class EditTaskDialogComponent implements OnChanges {

  @Inject(MAT_DIALOG_DATA) data: TaskModel = new TaskModel(0,'',false,'',new Date(), new Date());
  taskForm = new FormGroup({
    checkTask: new FormControl(this.data.checkTask),
    taskTitle: new FormControl(this.data.taskTitle),
    notes: new FormControl(this.data.notes)
  });

  ngOnChanges(){
    debugger;
    this.taskForm = new FormGroup({
      checkTask: new FormControl(this.data.checkTask),
      taskTitle: new FormControl(this.data.taskTitle),
      notes: new FormControl(this.data.notes)
    });
  }
}
