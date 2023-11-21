import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainer } from './trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private apiURL = "http://localhost:3000"; 

  constructor(private HttpClient:HttpClient) { }

  getAll() : Observable<Trainer[]>{
    return this.HttpClient.get<Trainer[]>(this.apiURL+"/trainers")
  }

  httpOptions = {
    headers : new HttpHeaders({
      'content-type':'application/json'
    })
   }
  
   create(trainers:Trainer):Observable<Trainer>{
      return this.HttpClient.post<Trainer>(this.apiURL+"/trainers",
                                 JSON.stringify(trainers),this.httpOptions)
   }
  
   delete(id:number):Observable<Trainer>{
    return this.HttpClient.delete<Trainer>(this.apiURL + "/trainers/"+id)
   } 

   find(id:number):Observable<Trainer>{
    return this.HttpClient.get<Trainer>(this.apiURL + "/trainers/"+id)
   }

   update(id:number,trainer:Trainer):Observable<Trainer>{
    return this.HttpClient.put<Trainer>(this.apiURL+"/tariners/"+id,
    JSON.stringify(trainer),this.httpOptions)
  }

}
