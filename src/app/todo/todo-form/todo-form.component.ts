import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Itodo } from 'src/app/shared/model/todo';
import { TodoservService } from 'src/app/shared/services/todoserv.service';
import { uuidservices } from 'src/app/shared/services/uuid.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  todoform !: FormGroup
  editobj!: Itodo
  todoar: Array<Itodo> = []
  iseditbtn: boolean = false
  constructor(private todoserv: TodoservService,
    private uuidservice: uuidservices) { }

  ngOnInit(): void {
    this.createtodoform()
    this.todoserv.todoeditsubject$
      .subscribe(res => {
        console.log(res);
        this.editobj = res
        this.iseditbtn = true
        this.todoform.patchValue(res)
      })


  }

  createtodoform() {
    this.todoform = new FormGroup({
      todolist: new FormControl(null, [Validators.required,Validators.minLength(5),Validators.maxLength(15)])
    })
  }

  onaddtodo() {
    if (this.todoform.valid) {
      console.log(this.todoform.value);
      let todoobj = { ...this.todoform.value, id: this.uuidservice.uuidv4() }
      this.todoform.reset()
      this.todoserv.senddata(todoobj)
      console.log(todoobj);

    }

  }
  onupdatebt() {
    let updateobj = { ...this.todoform.value, id: this.editobj.id }
    console.log(updateobj);
    this.todoserv.updateobjtodo(updateobj)
    this.todoform.reset()
    this.iseditbtn = false
  }


}
