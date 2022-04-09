import { Observable } from 'rxjs';
import { ApiUrl } from '../models/constants/urls';
import { ListResponseModel } from './../models/result/list-response-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/entities/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url=ApiUrl+"customers/"
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ListResponseModel<Customer>>{
    return this.httpClient.get<ListResponseModel<Customer>>(this.url+"getAll")
  }
}
