import { Component, OnInit } from '@angular/core';
import { Itodo } from 'src/app/shared/model/todo';
import { TodoservService } from 'src/app/shared/services/todoserv.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
todoarr:Array<Itodo>=[]
  constructor(private todoservice:TodoservService) { }

  ngOnInit(): void {
    this.todoarr=this.todoservice.getall()
}
oneditbtn(todo:Itodo){
  this.todoservice.todoeditsubject$.next(todo)
}
ondelete(todo:Itodo){
  this.todoservice.removedata(todo)


}

}
