import { RouterService } from './router.service';
import { TemplatesService } from './templates.service';
import { ToastrService } from 'ngx-toastr';
import { ApiUrl } from './../models/constants/urls';
import { ResponseModel } from './../models/result/response_model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../models/entities/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  url=ApiUrl+"payments/"
  constructor(private httpClient:HttpClient,private toastrService:ToastrService,private templatesService:TemplatesService) { }

  pay(payment:Payment){
    return this.httpClient.post<ResponseModel>(this.url+"pay",payment)
  }

  add(payment:Payment){
    this.httpClient.post<ResponseModel>(this.url+"add",payment).subscribe(response=>{
      this.toastrService.success(response.message)
    },errorResponse=>this.templatesService.errorResponse(errorResponse))
  }

  getByUserId(userId:number){
    return this.httpClient.get<ResponseModel>(this.url+"getByUserId?userId="+userId)
  }
}
