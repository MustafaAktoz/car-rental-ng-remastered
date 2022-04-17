import { TemplatesService } from './templates.service';
import { ToastrService } from 'ngx-toastr';
import { ResponseModel } from './../models/result/response_model';
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
  constructor(private httpClient: HttpClient, private toastrService:ToastrService, private templatesService:TemplatesService) { }

  getAllByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    return this.httpClient.get<ListResponseModel<CarImage>>(this.url + "getAllByCarId?carId=" + carId);
  }

  delete(id: number) {
    return this.httpClient.post<ResponseModel>(this.url + "delete?id=" + id, null)
  }
}
