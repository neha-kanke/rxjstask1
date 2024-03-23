import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { observableToBeFn } from "rxjs/internal/testing/TestScheduler";
import { environment } from "src/environments/environment.prod";

@Injectable(
{
    providedIn:'root'
}
)





export class  ObervelvService{
posturl:string=`${environment.baseurl}/posts.json`


constructor( private _http:HttpClient){}

onsrvale= new Observable((observer)=>{
    let count=0
    setInterval(()=>{
        observer.next(count)
        count++
        if(count==5){
            observer.complete()
        }
        if(count>7){
            observer.error('something went wrong ')
        }
    },1000)

})

getpostdata(){
return this._http.get(this.posturl)

    
}

}