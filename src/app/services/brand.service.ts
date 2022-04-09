import { ApiUrl } from '../models/constants/urls';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../models/entities/brand';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/result/list-response-model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  url = ApiUrl + "brands/"
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(this.url + "getAll");
  }
}
