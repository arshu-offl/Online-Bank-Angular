import { Component, OnInit } from '@angular/core';
import {ChangeAtmpinService} from '../change-atmpin.service';
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-change-atmpin',
  templateUrl: './change-atmpin.component.html',
  styleUrls: ['./change-atmpin.component.css']
})
export class ChangeAtmpinComponent implements OnInit {

  accNo: string = "";
  oldPin: any;
  newPin: any;
  confirmPin: any; 
  msg: string="";
  constructor(private ChangeAtmpinService: ChangeAtmpinService) { }

  updateId: number = 0;
  accList: any=[] ;
  msgTrue = false;
  ngOnInit(): void {
     
      
  }
  

  onSubmit()
  {
     
  }

  updatePin(requestForm: NgForm)
  {
    
    const newFormData={accNo:this.accNo, oldPin:this.oldPin, newPin:this.newPin, confirmPin:this.confirmPin};


    if(this.newPin!=this.confirmPin)
    {
      console.log("new pin doesnot match with confirm pin");
    }
    else{ 
    console.log(this.accNo);



    this.ChangeAtmpinService.getAccounts(this.accNo).subscribe(data => {
      this.accList = data;
       console.log(this.accList[0].id);
      // console.log(this.accList);

      this.updateId = this.accList[0].id;
      console.log(this.updateId);
      const formData = {id:this.updateId, AccNo:this.accNo, Pin:this.newPin};
      console.log(formData);
      console.log(this.accList[0].Pin);
      if(this.accList[0].Pin==this.oldPin)
      {
     
        this.ChangeAtmpinService.updateAccount(this.updateId,formData).subscribe(data =>{});
         
      }
      else{
         console.log("wrong pin entered");
      }
    //  this.ChangeAtmpinService.updateAccount(this.updateId,formData).subscribe(data =>{});

    });
    

    // const formData = {id:this.updateId, AccNo:this.accNo, Pin:this.newPin};
    //calling function for put
    // console.log(formData);
    // this.ChangeAtmpinService.updateAccount(this.updateId,formData).subscribe(data =>{});
    

    // if(this.newPin!=this.confirmPin)
    // {
    //   console.log("new pin doesnot match with confirm pin");
    // }
   
    
    // this.ChangeAtmpinService.updateAccount(2,{id:2,accNo:"1234",pin:80}).subscribe(data =>{});
  }
  }
}
