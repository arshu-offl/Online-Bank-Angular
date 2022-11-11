import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import UsersJson from '../../../assets/users.json';
import TransJson from '../../../assets/transactions.json'
import {AbstractControl, FormBuilder, FormGroup, FormControl} from '@angular/forms';

interface TRANS {
  accountid:Number,
  transactionid:Number,
  date:String,
  amount:Number,
  transtype:String
}

const emptyTRANS = (): TRANS => ({
  accountid:0,
  transactionid:0,
  date:'',
  amount:0,
  transtype:''
});

interface USERS {
  id: Number;
  name: String;
  username: String;
  email: String;
  balance:Number;
}

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})

export class CheckBalanceComponent {
  // properties
  title='ang-cap';
  
  displayFor: string= "";
  displayBalance: Number=0;
  displayEmail: String="";
  
  Users: USERS[] = UsersJson;
  User: USERS = UsersJson[0];

  Trans: TRANS[] = TransJson;
  tran : TRANS = emptyTRANS();
  arr: TRANS[] = [this.tran];

  //form
  userForm = new FormGroup({
    name: new FormControl('')
  });

  
  //functions
  onSubmit(){
    console.warn(this.userForm.value);
    this.displayFor = this.userForm.get("name")?.value!;
    this.arr = [];


    for(let user of this.Users){
      if(this.displayFor === user.name )
      {
        this.displayBalance = user.balance;
        for(let t of this.Trans){
          if(t.accountid===user.id){

          //  alert(  this.displayFor+ t.accountid+ user.id);
            this.arr.push(t);
          }
        }
      }
      }
  }

  constructor(){
    console.log(this.Users);
  }
}