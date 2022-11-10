import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginService } from 'src/app/services/login.service';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [HttpClientModule],
      providers: [LoginService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Register and set the form step to 1', () => {
    expect(component).toBeTruthy();

    expect(component.formStep).toEqual(1);
  });

  it('should require the required fields', () => {

    component.registerForm.setValue({
      firstName: '',
      lastName: '',
      middleName: '',
      mobile_number: '',
      username: '',
      password: '',
      security_qn: '',
      security_ans: '',
      confirm_password: ''
    })

    expect(component.registerForm.valid).toEqual(false);

    component.registerForm.setValue({
      firstName: 'A',
      lastName: 'AAA',
      middleName: '',
      mobile_number: '1234567890',
      username: 'AAAAA',
      password: 'AAAAA',
      security_qn: '0',
      security_ans: 'AAA',
      confirm_password: 'AAAAA'
    })

    expect(component.registerForm.valid).toEqual(true);
  })

  it('should navigate', () => {

    component.registerForm.setValue({
      firstName: 'A',
      lastName: 'AAA',
      middleName: '',
      mobile_number: '1234567890',
      username: '',
      password: '',
      security_qn: '',
      security_ans: '',
      confirm_password: ''
    })

    component.formStepHandler(1);
    expect(component.formStep).toEqual(2);

    component.formStepHandler(0);
    expect(component.formStep).toEqual(1);
  })
});
