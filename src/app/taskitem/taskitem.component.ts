import { Component ,Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { Task } from '../task';

@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.css']
})
export class TaskitemComponent {
  @Input() task : Task={
    name:"",
    date:new Date,
    priority:"",
    state:"",
    description:""
  }


    // Define an input property for the task
  @Output() view = new EventEmitter<Task>();
  // @Output() updateTask = new EventEmitter<Task>();
  // @Output() deleteTask = new EventEmitter<Task>();

  // onUpdate(task: Task) {
  //   this.updateTask.emit(task);
  // }

  // onDelete(task: Task) {
  //   this.deleteTask.emit(task);
  // }


clickView(){
  this.view.emit(this.task);
  console.log(this.task)
}
  AlertU(){
    Swal.fire({
      position: 'bottom-end',
      icon: 'success',
      title: 'Your Task has been Updated',
      showConfirmButton: false,
      timer: 1500
    })

 }
  AlertR(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to remove this!",
      icon: 'warning',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted Task!',
          'Your Task has been deleted.',
          'success'
        )
      }
    })
  }
}
