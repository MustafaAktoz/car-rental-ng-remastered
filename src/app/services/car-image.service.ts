import { Observable } from 'rxjs';
import { ApiUrl } from './../models/constants/urls';
import { ListResponseModel } from './../models/result/list-response-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarImage } from '../models/entities/car-image';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  url = ApiUrl + "carImages/"
  constructor(private httpClient: HttpClient) { }

  getAllByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    return this.httpClient.get<ListResponseModel<CarImage>>(this.url + "getAllByCarId?carId="+carId);
  }
}
