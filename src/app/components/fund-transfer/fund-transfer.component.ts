import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountType } from '../../models/accountType';
import { Beneficiary } from '../../models/beneficiary';
import { FundTransfer } from '../../models/fundTransfer';
import { FundTransferService } from './fund-transfer.service';
import { ToastrService } from 'ngx-toastr';

export interface User {
  accountNumber: string;
  balance: number;
}

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css'],
})
export class FundTransferComponent implements OnInit {

  fundTransferForm: FormGroup;
  accountTypes: AccountType[] = [];
  selectedBeneficiary: Beneficiary;
  selectedAccountTypeId: number;
  submitted: Boolean = false;
  user: User;
  allBeneficiaries: Beneficiary[] = [];
  userBeneficiaries: Beneficiary[] = [];

  constructor(private formBuilder: FormBuilder, private fundTransferService: FundTransferService,
    private messageService: ToastrService) {
  }

  ngOnInit(): void {

    this.user = { accountNumber: "1111111", balance: 50000 };
    this.formInit();

    this.fundTransferService.getAllBeneficiaries().subscribe((response) => {
      this.allBeneficiaries = response.allBeneficiaries;
      this.userBeneficiaries = this.allBeneficiaries.filter((element) => {
        return element.sourceAccount === this.user.accountNumber;
      });
    });

    this.fundTransferService.getAccountTypes().subscribe((response) => {
      this.accountTypes = response.accountTypes;
    });
  }

  formInit() {
    console.log("Initializing FundTransfer Form...");
    this.fundTransferForm = this.formBuilder.group({
      sourceAccount: [this.user.accountNumber, Validators.required],
      beneficiaryName: ['', Validators.required],
      beneficiaryAccount: ['', Validators.required],
      beneficiaryIfsc: ['', Validators.required],
      beneficiaryAccountType: [, Validators.required],
      amount: [, Validators.required],
      remarks: [],
      acceptTerms: [false, Validators.requiredTrue]
    });
    console.log(this.fundTransferForm.getRawValue());
    console.log("FundTransfer Form initialization completed");
  }

  get f() {
    return this.fundTransferForm.controls;
  }

  chnageBeneficiary(event: any) {
    let value = event.target.value;
    value = value.substring(value.indexOf(':') + 2);
    this.selectedBeneficiary = this.getBeneficiary(value);
    this.fundTransferForm.get('beneficiaryAccount').setValue(this.selectedBeneficiary.beneficiaryAccount);
    this.fundTransferForm.get('beneficiaryIfsc').setValue(this.selectedBeneficiary.beneficiaryIfscCode);
  }

  changeAccountType(event: any) {
    const value = event.target.value;
    this.selectedAccountTypeId = value;
  }

  getBeneficiary(accountNumber: any): Beneficiary {
    let beneficiary = this.userBeneficiaries.find((element) => {
      return element.beneficiaryAccount === accountNumber;
    });
    return beneficiary;
  }

  transferFunds() {
    this.submitted = true;

    let fundTranferRequest: FundTransfer = {
      sourceAccount: this.f['sourceAccount'].getRawValue(),
      destinationAccount: this.f['beneficiaryAccount'].getRawValue(),
      destinationAccountTypeId: this.f['beneficiaryAccountType'].getRawValue(),
      transferAmount: this.f['amount'].getRawValue()
    };

    this.fundTransferService.transferFunds(fundTranferRequest).subscribe((response) => {
      if (response.status == 'success') {
        this.messageService.success(response.message, response.title);
      } else if (response.status == 'error') {
        this.messageService.error(response.message, response.title);
      }
    });
    this.submitted = false;
    this.formInit();
  }

}
