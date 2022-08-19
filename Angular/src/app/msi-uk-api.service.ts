import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MSIUKAPIService {
  readonly msiukAPIUrl = "https://localhost:7190/api";

  constructor(private http:HttpClient) { }

  getUsersList():Observable<any[]>{
    return this.http.get<any>(`${this.msiukAPIUrl}/users`);
  }
  addUser(data:any){
    return this.http.post(`${this.msiukAPIUrl}/users`,data);
  }
  updateUser(id:string,data:any){
    return this.http.put(`${this.msiukAPIUrl}/users/${id}`,data);
  }
  getUserbyID(id:string):Observable<any>{
    return this.http.get<any>(`${this.msiukAPIUrl}/users/${id}`);
  }
  getAdmin(id:string):Observable<any>{
    return this.http.get<any>(`${this.msiukAPIUrl}/admins/${id}`);
  }
  deleteUser(id:string){
    return this.http.delete(`${this.msiukAPIUrl}/users/${id}`);
  }
}
