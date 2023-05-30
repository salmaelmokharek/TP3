import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { TaskService } from '../services/task.service';
import { Task } from '../task';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit{
  tasks: Task[] = [];
  selectedTask: Task | undefined;

  constructor (private route: ActivatedRoute, private taskService : TaskService){}
  ngOnInit(): void {
    this.getAllTask();
  }

  // updateTask(task: Task): void {
  //   if (this.selectedTask === task) {
  //     this.selectedTask = undefined;
  //   }
  //   this.taskService.updateTask(task).subscribe();
  // }

  // deleteTask(task: Task): void {
  //   this.tasks = this.tasks.filter(t => t !== task);
  //   this.taskService.deleteTask(task).subscribe();
  // }

  onSelect(task: Task) {
    this.selectedTask = task;
    
  }

  getAllTask(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }
    AlertD(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your Task has been Completed !',
        showConfirmButton: false,
        timer: 1500
      })

   }
}
