import { Observable } from 'rxjs';
import { ApiUrl } from '../models/constants/urls';
import { ListResponseModel } from './../models/result/list-response-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Color } from '../models/entities/color';
import { ResponseModel } from '../models/result/response_model';
import { ToastrService } from 'ngx-toastr';
import { TemplatesService } from './templates.service';
import { SingleResponseModel } from '../models/result/single-response-model';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  url = ApiUrl + "colors/"
  constructor(private httpClient: HttpClient, private toastrService: ToastrService, private templatesService: TemplatesService) { }

  add(color: Color) {
    this.httpClient.post<ResponseModel>(this.url + "add", color).subscribe(response => {
      this.toastrService.success(response.message);
      window.location.reload()
    }, errorResponse => this.templatesService.errorResponse(errorResponse));
  }

  update(color: Color) {
    this.httpClient.post<ResponseModel>(this.url + "update", color).subscribe(response => {
      this.toastrService.success(response.message);
      window.location.reload()
    }, errorResponse => this.templatesService.errorResponse(errorResponse));
  }

  getAll(): Observable<ListResponseModel<Color>> {
    return this.httpClient.get<ListResponseModel<Color>>(this.url + "getAll")
  }

  getById(id: number): Observable<SingleResponseModel<Color>> {
    return this.httpClient.get<SingleResponseModel<Color>>(this.url + "getById?id=" + id)
  }
}
