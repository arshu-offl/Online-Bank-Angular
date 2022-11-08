import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users: Observable<User[]>;
  constructor(private http: HttpClient) { 
    this.users = this.getUsers();
  }

  getUsers(){
    return this.http.get<User[]>('backend/users.json');
  }

  addUser(){
    // -_-
  }

  getSecurityQuestions(){
    return this.http.get<User[]>('backend/security_qns.json');
  }

  generateAccountNumber(){

    let chars = "ABCDEFGHIJKLMNOPQRSTUVWYXZ1234567890";

    let generatedValue = "";
    for(let i = 0; i < 10; i++){
      let randomIndex = Math.random() * 36;
      generatedValue += chars.charAt(randomIndex);
    }

    return generatedValue;
  }
}
