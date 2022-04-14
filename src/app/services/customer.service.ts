import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/constants/urls';
import { ListResponseModel } from './../models/result/list-response-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/entities/customer';
import { SingleResponseModel } from '../models/result/single-response-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url=ApiUrl+"customers/"
  constructor(private httpClient:HttpClient,private authService:AuthService) { }

  getAll():Observable<ListResponseModel<Customer>>{
    return this.httpClient.get<ListResponseModel<Customer>>(this.url+"getAll")
  }

  getById(id:number):Observable<SingleResponseModel<Customer>>{
    return this.httpClient.get<SingleResponseModel<Customer>>(this.url+"getById?id="+id)
  }

  getByUserId(userId:number):Observable<SingleResponseModel<Customer>>{
    return this.httpClient.get<SingleResponseModel<Customer>>(this.url+"getByUserId?userId="+userId)
  }

  getCurrentCustomer():Observable<SingleResponseModel<Customer>>{
    let currentUserId=this.authService.getCurrentUserId
    return this.getByUserId(currentUserId)
  }
}
