import { TaskformComponent } from './taskform/taskform.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CompletedComponent } from './completed/completed.component';
import { TasklistComponent } from './tasklist/tasklist.component';


const routes: Routes = [
  { path:"", redirectTo :'/tasklist',pathMatch :'full'},
  { path:"tasklist" , component : TasklistComponent},
  { path:"taskform" , component : TaskformComponent},
  { path:"completed" , component : CompletedComponent},
  { path:"**", component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
