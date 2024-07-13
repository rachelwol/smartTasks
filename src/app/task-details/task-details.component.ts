import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TaskModel } from '../models/task.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [MatCheckboxModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,
    MatIconModule, MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MatCardModule, DatePipe
  ],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskDetailsComponent implements OnChanges{
  @Input() task: TaskModel = new TaskModel(0, '', false,'', new Date(), new Date());
  @Output() deleteTask = new EventEmitter();

  taskForm = new FormGroup({
    checkTask: new FormControl(this.task.checkTask),
    taskTitle: new FormControl(this.task.taskTitle),
    notes: new FormControl(this.task.notes)
  });

  dialog = inject(MatDialog);
  panelOpenState = signal(false);
  today: Date = new Date();

  constructor(){

  }

  ngOnChanges(){
    this.taskForm = new FormGroup({
      checkTask: new FormControl(this.task.checkTask),
      taskTitle: new FormControl(this.task.taskTitle),
      notes: new FormControl(this.task.notes)
    });
  }

  openDialog(): void {
    debugger;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { task: this.taskForm };
    dialogConfig.maxWidth = '100vw';
    dialogConfig.maxHeight = '100vw';
    const dialogRef = this.dialog.open(EditTaskDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.taskForm = result;
      }
    });
  }

  deletedTask(){
    this.deleteTask.emit();
  }
}
