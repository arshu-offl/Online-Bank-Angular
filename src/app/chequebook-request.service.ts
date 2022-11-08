import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChequebookRequestService {

  constructor(private httpClient: HttpClient) { }

  getAccounts()
  {

    //headers
    // const httpHeaders = new HttpHeaders();
    // httpHeaders.append('content-type' , 'application/json');
    return this.httpClient.get('http://localhost:3000/ChequebookRequest');

  }

  createRequest(createBody:any)
  {
    return this.httpClient.post('http://localhost:3000/ChequebookRequest', createBody);
    
  }
}
