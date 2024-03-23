import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ObervelvService } from '../../services/observalve.service';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit  ,OnDestroy{
obercesub !:Subscription
   
private _obserservice=inject(ObervelvService)
  constructor() { }



  ngOnDestroy(): void {
    this.obercesub.unsubscribe()
  }

  ngOnInit(): void {
    this._obserservice.getpostdata()
    .subscribe(res=>{
      console.log(res);
      
    })


  



  }


}
  

