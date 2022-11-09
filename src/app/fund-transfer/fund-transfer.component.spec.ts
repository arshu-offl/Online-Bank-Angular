import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FundTransferComponent } from './fund-transfer.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

describe('FundTransferComponent', () => {
  let component: FundTransferComponent;
  let fixture: ComponentFixture<FundTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        ToastrModule.forRoot()
      ],
      declarations: [FundTransferComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FundTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be valid if form value is valid', () => {
    component.fundTransferForm.setValue({
      "sourceAccount": "1111",
      "beneficiaryName": "Test",
      "beneficiaryAccount": "2222",
      "beneficiaryIfsc": "TEST176",
      "beneficiaryAccountType": 1,
      "amount": 200,
      "remarks": "",
      "acceptTerms": true
    });
    expect(component.fundTransferForm.valid).toEqual(true);
  });

  it('should be invalid if form value is invalid', () => {
    component.fundTransferForm.setValue({
      "sourceAccount": "1111",
      "beneficiaryName": "Test",
      "beneficiaryAccount": "2222",
      "beneficiaryIfsc": "TEST176",
      "beneficiaryAccountType": 1,
      "remarks": "",
      "amount": '',
      "acceptTerms": true
    });
    expect(component.fundTransferForm.valid).toEqual(false);
  });
});
