import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeAtmpinService {

  constructor(private httpClient: HttpClient) { }

  getAccounts(AccNo:string)
  {

    //headers
    // const httpHeaders = new HttpHeaders();
    // httpHeaders.append('content-type' , 'application/json');
    return this.httpClient.get(`http://localhost:3000/Accounts?AccNo=${AccNo}`);
}

   updateAccount(uid: number, updatedBody: any)
   {
    const endpointUrl = `http://localhost:3000/Accounts/`+ uid;
    return this.httpClient.put<any>(endpointUrl,updatedBody);
   }
}
