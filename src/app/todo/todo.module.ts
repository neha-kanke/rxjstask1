import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TododashBoardComponent } from './tododash-board/tododash-board.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {ReactiveFormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    TododashBoardComponent,
    TodoFormComponent,
    TodoListComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],exports:[TododashBoardComponent]
})
export class TodoModule { }
