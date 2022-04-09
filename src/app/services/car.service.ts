import { CarDetailDTO } from './../models/dtos/car-detail-dto';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/constants/urls';
import { ListResponseModel } from './../models/result/list-response-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/entities/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  url=ApiUrl+"cars/"
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ListResponseModel<Car>>{
    return this.httpClient.get<ListResponseModel<Car>>(this.url+"getAll")
  }

  getDetails():Observable<ListResponseModel<CarDetailDTO>>{
    return this.httpClient.get<ListResponseModel<CarDetailDTO>>(this.url+"getDetails")
  }
}
