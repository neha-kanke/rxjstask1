import { Component, Inject, OnInit, inject } from '@angular/core';
import { ObervelvService } from './shared/services/observalve.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {


private obsrvices=inject(ObervelvService)
  constructor(){}
  ngOnInit(): void {
    this.obsrvices.onsrvale
    .subscribe(res=>{
      console.log(res);
      
    })
   
  }
  title = 'rxjstask1';
}
