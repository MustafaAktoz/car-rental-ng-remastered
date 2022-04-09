import { CarDetailDTO } from '../models/entities/dtos/car-detail-dto';
import { Observable } from 'rxjs';
import { ApiUrl } from '../models/constants/urls';
import { ListResponseModel } from './../models/result/list-response-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/entities/car';
import { SingleResponseModel } from '../models/result/single-response-model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  url = ApiUrl + "cars/"
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(this.url + "getAll")
  }

  getDetailById(id:number): Observable<SingleResponseModel<CarDetailDTO>> {
    return this.httpClient.get<SingleResponseModel<CarDetailDTO>>(this.url + "getDetailById?id="+id)
  }
  
  getDetails(): Observable<ListResponseModel<CarDetailDTO>> {
    return this.httpClient.get<ListResponseModel<CarDetailDTO>>(this.url + "getDetails")
  }

  getDetailsByBrandId(brandId: number): Observable<ListResponseModel<CarDetailDTO>> {
    return this.httpClient.get<ListResponseModel<CarDetailDTO>>(this.url + "getDetailsByBrandId?brandId=" + brandId)
  }

  getDetailsByColorId(colorId: number): Observable<ListResponseModel<CarDetailDTO>> {
    return this.httpClient.get<ListResponseModel<CarDetailDTO>>(this.url + "getDetailsByColorId?colorId=" + colorId)
  }
}