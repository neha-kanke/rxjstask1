import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from  '@angular/common/http'

import { AppComponent } from './app.component';
import { OneComponent } from './shared/component/one/one.component';
import { TodoModule } from './todo/todo.module';



@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TodoModule
  
 


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
