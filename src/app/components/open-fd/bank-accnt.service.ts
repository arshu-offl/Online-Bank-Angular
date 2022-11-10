import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankAccntService {



   constructor(private http: HttpClient) { }
  getData(){
    let url = "/assets/db.json";
    return this.http.get(url);
 }
}
