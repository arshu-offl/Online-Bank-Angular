import { Component, OnInit } from '@angular/core';
import {ChequebookRequestService} from '../chequebook-request.service'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-chequebook-request',
  templateUrl: './chequebook-request.component.html',
  styleUrls: ['./chequebook-request.component.css']
})
export class ChequebookRequestComponent implements OnInit {

  
  accNo: string="";
  pages: number=20;
  constructor(private ChequebookRequestService: ChequebookRequestService) { }
  
  pagesOptions = [
    { name: "20", value: 20 },
    { name: "50", value: 50 },
    { name: "75", value: 75 }
  ]

  msgTrue = false;
  accList: any ;
  ngOnInit(): void {
      this.ChequebookRequestService.getAccounts().subscribe(data => {
        this.accList = data;
      });
  }

  onSubmit()
  {

  }
  addNewRequest(requestForm: NgForm)
  {

    const newFormData={AccNo:this.accNo,Pages:this.pages};
    console.log(newFormData);
     this.ChequebookRequestService.createRequest(newFormData).subscribe(data => {
      console.log(data);
      this.msgTrue = true;
     });
  }
 

}
