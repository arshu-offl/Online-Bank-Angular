import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputData = {
    username: '',
    password: '',
  }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(this.inputData.username, [Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(5), this.validateUserName()]),
    password: new FormControl(this.inputData.password, [Validators.required, Validators.minLength(5)]),
  });

  users: User[] = [];

  constructor(private loginService: LoginService) { 

    this.loginService.getUsers().subscribe((data) => {
      this.users = data
    });

  }

  ngOnInit(): void {
  }
  
  validateUserName(){
    return (element: FormControl)=>{
      let username = element.value;
      if(username.length < 5)
        return {
          length: 5
        };
      else if(this.users.findIndex((user) => user.username === username) === -1)
        return {
          non_existent: true
        };
      
      return null;
    }
  }

  getError(FormCtrl: any, fieldName: String){
    let errors = FormCtrl.errors;

    console.log(errors)
    if(FormCtrl.hasError('required'))
      return `${fieldName} cannot be empty`;
    else if(FormCtrl.hasError('length') || FormCtrl.hasError('minlength'))
      return `${fieldName} should be at least ${errors.minlength !== undefined ? errors.minlength.requiredLength : errors['length']} characters long`;
    else if(FormCtrl.hasError('exists'))
      return `Oops! ${fieldName} already exists`;
    else if(FormCtrl.hasError('non_existent'))
      return `Oops! ${fieldName} does not exist!`;
    else if(FormCtrl.hasError('pattern'))
      return `Follow ${fieldName} pattern!!`;

    return ''
  }

  

  getFormErrorMessage(){
 
    let usernameFormCtrl = this.loginForm.get('username');
    let passwordFormCtrl = this.loginForm.get('password');

    if(usernameFormCtrl?.invalid)
      return this.getError(usernameFormCtrl, 'Username');
    else if(passwordFormCtrl?.invalid)
      return this.getError(passwordFormCtrl, 'Password');
    
    return ''
  }
}
