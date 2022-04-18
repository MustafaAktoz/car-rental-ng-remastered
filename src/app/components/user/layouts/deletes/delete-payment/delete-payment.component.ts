import { Payment } from 'src/app/models/entities/payment';
import { AuthService } from 'src/app/services/auth.service';
import { PaymentService } from './../../../../../services/payment.service';
import { UserChildComponentBaseComponent } from './../../../bases/user-child-component-base/user-child-component-base.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delete-payment',
  templateUrl: './delete-payment.component.html',
  styleUrls: ['./delete-payment.component.css']
})
export class DeletePaymentComponent extends UserChildComponentBaseComponent implements OnInit {
  @Input() currentPaymentFromParent:Payment

  constructor(private paymentService: PaymentService, public override authService: AuthService) {
    super(authService)
    this.innerHTML = "Sil"
  }

  ngOnInit(): void {
  }

  delete(){
    this.paymentService.delete(this.currentPaymentFromParent)
  }
}