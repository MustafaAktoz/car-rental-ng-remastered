import { PaymentService } from './payment.service';
import { RouterService } from './router.service';
import { TemplatesService } from './templates.service';
import { ToastrService } from 'ngx-toastr';
import { ResponseModel } from './../models/result/response_model';
import { Observable } from 'rxjs';
import { ApiUrl } from './../models/constants/urls';
import { ListResponseModel } from './../models/result/list-response-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentalDetailDTO } from '../models/entities/dtos/rental-detail-dto';
import { Rental } from '../models/entities/rental';
import { Payment } from '../models/entities/payment';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  url = ApiUrl + "rentals/"
  constructor(private httpClient: HttpClient, private toastrService: ToastrService, private templatesService: TemplatesService,
    private paymentService: PaymentService, private routerService: RouterService) { }

  payAndRent(payment: Payment, rental: Rental) {
    this.paymentService.pay(payment).subscribe(response => {
      this.toastrService.success(response.message)
      this.add(rental)
      this.routerService.carDetailsPage()
    }, errorResponse => this.templatesService.errorResponse(errorResponse))
  }

  add(rental: Rental) {
    this.httpClient.post<ResponseModel>(this.url + "add", rental).subscribe(response => {
      this.toastrService.success(response.message)
    }, errorResponse => this.templatesService.errorResponse(errorResponse));
  }

  rulesForAdding(rental: Rental) {
    return this.httpClient.post<ResponseModel>(this.url + "rulesForAdding", rental);
  }

  getDetails(): Observable<ListResponseModel<RentalDetailDTO>> {
    return this.httpClient.get<ListResponseModel<RentalDetailDTO>>(this.url + "getDetails");
  }
}
