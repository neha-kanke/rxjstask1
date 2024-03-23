import { Injectable } from '@angular/core';
import { Itodo } from '../model/todo';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoservService {
  todoarr: Array<Itodo> = [
    {
      todolist: "angular",
      id: 1
    }
  ]
  todoeditsubject$: Subject<Itodo> = new Subject<Itodo>()
  constructor() {}


  getall(): Array<Itodo> {
    return this.todoarr
  }

  senddata(todo: Itodo) {
    return this.todoarr.push(todo)
  }




  updateobjtodo(updatevalue: Itodo) {
    for (const key of this.todoarr) {
      if (key.id === updatevalue.id) {
       let update= key.todolist = updatevalue.todolist
       console.log(update);
      }
  
    }
  }
  removedata(remoitem:Itodo){
    let getindex=this.todoarr.findIndex(ele=>ele.id===remoitem.id)
    this.todoarr.splice(getindex,1)
  }



}
