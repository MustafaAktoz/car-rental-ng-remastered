import { Observable } from 'rxjs';
import { ApiUrl } from '../models/constants/urls';
import { ListResponseModel } from './../models/result/list-response-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Color } from '../models/entities/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  url=ApiUrl+"colors/"
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.url+"getAll")
  }
}
