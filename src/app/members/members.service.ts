import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Members } from './members';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private apiURL = "http://localhost:3000";

  constructor(private HttpClient:HttpClient) { }

 getAll():Observable<Members[]>{
    return this.HttpClient.get<Members[]>(this.apiURL+"/members")
 }

 httpOptions = {
  headers : new HttpHeaders({
    'content-type':'application/json'
  })
 }

 create(members:Members):Observable<Members>{
    return this.HttpClient.post<Members>(this.apiURL+"/members",
                               JSON.stringify(members),this.httpOptions)
 }

 delete(id:number):Observable<Members>{
  return this.HttpClient.delete<Members>(this.apiURL + "/members/"+id)
 } 

 find(id:number):Observable<Members>{
  return this.HttpClient.get<Members>(this.apiURL+"/members/"+id)
 }

  update(id:number,members:Members):Observable<Members>{
    return this.HttpClient.put<Members>(this.apiURL+"/members/"+id,
    JSON.stringify(members),this.httpOptions)
  }

}
