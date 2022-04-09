import { Observable } from 'rxjs';
import { ApiUrl } from './../models/constants/urls';
import { ListResponseModel } from './../models/result/list-response-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentalDetailDTO } from '../models/dtos/rental-detail-dto';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  url=ApiUrl+"rentals/"
  constructor(private httpClient:HttpClient) { }

  getDetails():Observable<ListResponseModel<RentalDetailDTO>>{
    return this.httpClient.get<ListResponseModel<RentalDetailDTO>>(this.url+"getDetails");
  }
}
