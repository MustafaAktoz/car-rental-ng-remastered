import { FormIsMissing } from './../../../models/constants/messages';
import { ToastrService } from 'ngx-toastr';
import {  RentalKey } from './../../../models/constants/local-storage-keys';
import { PaymentService } from './../../../services/payment.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/entities/payment';
import { RentalService } from 'src/app/services/rental.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Rental } from 'src/app/models/entities/rental';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  payFormGroup:FormGroup
  constructor(private formBuilder:FormBuilder,private paymentService:PaymentService, private rentalService:RentalService,
    private localStorageService:LocalStorageService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createPayFormGroup()
  }

  createPayFormGroup(){
    this.payFormGroup=this.formBuilder.group({
      fullName:["",Validators.required],
      cardNumber:["",Validators.required],
      cvv:["",Validators.required],
      expiryMouth:["",Validators.required],
      expiryYear:["",Validators.required],
    })
  }

  pay(){
    if(this.payFormGroup.valid){
      let payment:Payment=Object.assign({}, this.payFormGroup.value)
      let rental:Rental=this.localStorageService.get(RentalKey)
      this.paymentService.pay(payment)
      this.rentalService.add(rental)
    }else{
      this.toastrService.error(FormIsMissing)
    }
  }
}
