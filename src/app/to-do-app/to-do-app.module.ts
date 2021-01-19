import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoAppRoutingModule } from './to-do-app-routing.module';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddTaskComponent, ViewTaskComponent],
  imports: [
    CommonModule,
    ToDoAppRoutingModule,
    FormsModule
  ]
})
export class ToDoAppModule { }
