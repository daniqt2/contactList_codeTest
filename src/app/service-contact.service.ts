import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceContactService {

  constructor(public http: HttpClient) { }

  getUsers(){
    return this.http.get<any>("https://randomuser.me/api/");  
  }
}
