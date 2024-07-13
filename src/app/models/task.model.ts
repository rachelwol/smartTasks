export class TaskModel{
    id: number;
    taskTitle: string;
    checkTask: boolean;
    notes: string;
    creatDate: Date;
    taskDate: Date;

    constructor(id: number, taskTitle: string, checkTask: boolean, notes: string, creatDate: Date, taskDate: Date){
        this.id = id;
        this.taskTitle = taskTitle;
        this.checkTask = checkTask;
        this.notes = notes;
        this.creatDate = creatDate;
        this.taskDate = taskDate;
    }
}