import { RentalService } from '../../../../services/rental.service';
import { RentalKey } from '../../../../models/constants/local-storage-keys';
import { LocalStorageService } from '../../../../services/local-storage.service';
import { Rental } from '../../../../models/entities/rental';
import { PaymentService } from '../../../../services/payment.service';
import { Payment } from 'src/app/models/entities/payment';
import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-pay-with-saved-cards',
  templateUrl: './pay-with-saved-cards.component.html',
  styleUrls: ['./pay-with-saved-cards.component.css']
})
export class PayWithSavedCardsComponent implements OnInit {

  payments:Payment[]
  currentRental:Rental
  constructor(private paymentService:PaymentService,private rentalService:RentalService,private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.getCurrentRental()
    this.getAllByCustomerId()
  }
  
  payWithSavedCard(payment:Payment){
    this.rentalService.payAndRent(payment,this.currentRental)
  }

  getAllByCustomerId(){
    this.paymentService.getAllByCustomerId(this.currentRental.customerId).subscribe(response=>{
      this.payments=response.data
  })
  }

  getCurrentRental(){
    this.currentRental=this.localStorageService.getWithType<Rental>(RentalKey)
  }
}
