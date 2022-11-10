import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { BankAccntService } from './bank-accnt.service';
 import UserInfo from './db.json';



@Component({
  selector: 'app-open-fd',
  templateUrl: './open-fd.component.html',
  styleUrls: ['./open-fd.component.css']

})
export class OpenFDComponent implements OnInit {

 title = "Opening New FD";
  Componentname = "open_FD";
  UsersInfo: Array<any> = [
    {
    "account": 1,
    "availableAmt" : 200000

    },
    {
      "account" : 2,
      "availableAmt" : 500000

    },
    {
      "account" : 3,
      "availableAmt" : 750000
    },
    {
      "account" : 4,
      "availableAmt" : 300000

    },
    {
      "account" : 5,
      "availableAmt" : 400000

    }
  ]

  FDform :FormGroup;
  outputQuery: number | undefined;

  constructor(private formBuilder: FormBuilder) {
    this.FDform = formBuilder.group({   // building the form using form builder
      accntfield : new FormControl(''),  // In the form builder, creating a group of form elements
      amtfield : new FormControl(''),
      termsfield : ['', Validators.requiredTrue]
    });
   }

  // constructor(private bankaccnt : BankAccntService){
  // }

  ngOnInit(): void {
  //   this.bankaccnt.getData().subscribe(data=>{
  //   this.UserInfo = data;
  //   console.log(data);

  // });
  }

  postData(){
    console.log(this.FDform);
    console.log(this.FDform.value.amtfield);

    let accountNumber = this.FDform.value.accntfield;
    let fdAmount = this.FDform.value.amtfield;

    // Check Account number format
    if(isNaN(parseInt(accountNumber)) || isNaN(parseInt(fdAmount))){
      alert('Check your account number!!');
      return ;
    }

    let currentUserIndex = this.UsersInfo.findIndex((user) => user['account'] === parseInt(accountNumber));
    //  Check account number is available
    if(currentUserIndex === -1){
      alert('Account not available!!');
      return ;
    }

    let balance = this.UsersInfo[currentUserIndex].availableAmt;
    //Check !balance >= FD Amount => print error
    if( balance < fdAmount){
      alert(`Insufficient Balance ! Your available amount is ${balance}`);
      return ;
    }

    this.outputQuery = balance - fdAmount;
    this.UsersInfo[currentUserIndex].availableAmt = this.outputQuery;
  }

  /* showAmt(){
    this.availableamt = this.UserInfo.availableAmt;
    console.log(this.availableamt);

  } */





}
