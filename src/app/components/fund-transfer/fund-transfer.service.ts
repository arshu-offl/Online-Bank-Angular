import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FundTransfer } from '../../models/fundTransfer';
import { Response } from '../../models/response';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FundTransferService {

  constructor(private http: HttpClient) { }

  public getAccountTypes(): Observable<any> {
    return this.http.get("../assets/data/accountTypes.json");
  }

  public getAllBeneficiaries(): Observable<any> {
    return this.http.get("../assets/data/beneficiaries.json");
  }

  public transferFunds(fundTransferRequest: FundTransfer): Observable<any> {
    console.log("Transferring funds...");



    let response: Response = {
      title: 'Success',
      message: 'Funds transferred successfully!',
      status: 'success',
      consoleMessage: ''
    };
    console.log("Fund Transfer successfull!");
    return of(response);
  }
}
