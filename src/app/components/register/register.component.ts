import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  inputData = {
    firstName: '',
    middleName: '',
    lastName: '',
    username: '',
    password: '',
    security_qn: '0',
    security_ans: '',
    account_number: '',
    mobile_number: '',
    confirm_password: ''
  }

  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(this.inputData.firstName, [Validators.required, Validators.minLength(1)]),
    middleName: new FormControl(this.inputData.middleName),
    lastName: new FormControl(this.inputData.lastName, [Validators.required, Validators.minLength(3)]),
    username: new FormControl(this.inputData.username, [Validators.required, Validators.pattern('[A-Za-z]*'), Validators.minLength(5), this.validateUserName()]),
    password: new FormControl(this.inputData.password, [Validators.required, Validators.minLength(5)]),
    confirm_password: new FormControl(this.inputData.confirm_password), 
    security_qn: new FormControl(this.inputData.security_qn, [Validators.required]),
    security_ans: new FormControl(this.inputData.security_ans, [Validators.required, Validators.minLength(3)]),
    mobile_number: new FormControl(this.inputData.mobile_number, [Validators.required, Validators.pattern('[0-9]{10}')])
  });

  formStep: number = 1;
  users: User[] = [];
  security_questions: Array<any> = [];
  
  constructor(private loginService: LoginService) { 

    this.loginService.getUsers().subscribe((data) => {
      this.users = data
    });
    
    this.loginService.getSecurityQuestions().subscribe((data) => {
      this.security_questions = data;
    });

    // this.validateUserName.bind(this);
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
      else if(this.users.findIndex((user) => user.username === username) !== -1)
        return {
          exists: true
        };
      
      return null;
    }
  }

  formStepHandler(mode: number): void{

    if(mode === 1){
      if(this.formStep === 1){
        if(this.registerForm.get('firstName')?.invalid || this.registerForm.get('lastName')?.invalid ||  this.registerForm.get('mobile_number')?.invalid) return ;
        
        this.formStep = 2;
      }
      else if(this.formStep === 2){

        if(this.registerForm.get('username')?.invalid) return ;

        this.formStep = 3;
      }
      else if(this.formStep === 3){

        if(this.registerForm.get('password')?.invalid) return ;

        this.formStep = 4;
      }
      else if(this.formStep === 4){
        if(this.registerForm.get('security_qn')?.invalid || this.registerForm.get('security_ans')?.invalid) return ;
        
        this.generateAccount();
        this.formStep = 5;
      }
    }
    else
      this.formStep -= 1;
    
  }

  getError(FormCtrl: any, fieldName: String){
    let errors = FormCtrl.errors;

    if(FormCtrl.hasError('required'))
      return `${fieldName} cannot be empty`;
    else if(FormCtrl.hasError('length') || FormCtrl.hasError('minlength'))
      return `${fieldName} should be at least ${errors.minlength !== undefined ? errors.minlength.requiredLength : errors['length']} characters long`;
    else if(FormCtrl.hasError('exists'))
      return `Oops! ${fieldName} already exists`;
    else if(FormCtrl.hasError('pattern'))
      return `Follow ${fieldName} pattern!!`;

    return ''
  }

  getFormErrorMessage(){
   
    let firstNameFormCtrl = this.registerForm.get('firstName');
    let lastNameFormCtrl = this.registerForm.get('lastName');
    let usernameFormCtrl = this.registerForm.get('username');
    let passwordFormCtrl = this.registerForm.get('password');
    let securityQnFormCtrl = this.registerForm.get('security_qn');
    let securityAnswerFormCtrl = this.registerForm.get('security_ans');
    let mobileFormCtrl = this.registerForm.get('mobile_number');

    if(this.formStep === 1){
      if(firstNameFormCtrl?.invalid)
        return this.getError(firstNameFormCtrl, 'First Name');
      else if(lastNameFormCtrl?.invalid)
        return this.getError(lastNameFormCtrl, 'Last Name');
      else if(mobileFormCtrl?.invalid)
        return this.getError(mobileFormCtrl, 'Mobile Number');
    }
    else if(this.formStep === 2){
      return this.getError(usernameFormCtrl, 'Username');
    }
    else if(this.formStep === 3){

      if(this.inputData.password !== this.inputData.confirm_password)
        return "Passwords don't match";

      return this.getError(passwordFormCtrl, 'Password');
    }
    else if(this.formStep === 4){
      if(securityQnFormCtrl?.invalid) return this.getError(securityQnFormCtrl, 'Security Question');
      else if(securityAnswerFormCtrl?.invalid) return this.getError(securityAnswerFormCtrl, 'Security Answer');
    }

    return '';
  }

  generateAccount(){

    let generatedNumber = '';
    do{
      generatedNumber = this.loginService.generateAccountNumber();
    }while(this.users.findIndex((user) => user.account_number === generatedNumber) !== -1);
    
    this.inputData.account_number = generatedNumber;

  }
}
