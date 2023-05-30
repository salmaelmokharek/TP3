import { Task } from './../task';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
   url = "http://localhost:3000/tasks"

  constructor(private http : HttpClient ) { }

  getTasks() {
    return this.http.get<Task[]>("http://localhost:3000/tasks")

  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.url}/${task.id}`;
    return this.http.put<Task>(url, task);
  }

  deleteTask(task: Task): Observable<any> {
    const url = `${this.url}/${task.id}`;
    return this.http.delete(url);
  }
}
