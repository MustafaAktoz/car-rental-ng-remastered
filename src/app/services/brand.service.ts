import { TemplatesService } from './templates.service';
import { ToastrService } from 'ngx-toastr';
import { ApiUrl } from '../models/constants/urls';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../models/entities/brand';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/result/list-response-model';
import { ResponseModel } from '../models/result/response_model';
import { SingleResponseModel } from '../models/result/single-response-model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  url = ApiUrl + "brands/"
  constructor(private httpClient: HttpClient,private toastrService:ToastrService,private templatesService:TemplatesService) { }

  add(brand: Brand) {
    this.httpClient.post<ResponseModel>(this.url + "add", brand).subscribe(response=>{
      this.toastrService.success(response.message);
      window.location.reload()
    },errorResponse=>this.templatesService.errorResponse(errorResponse));
  }
  
  update(brand: Brand) {
    this.httpClient.post<ResponseModel>(this.url + "update", brand).subscribe(response=>{
      this.toastrService.success(response.message);
      window.location.reload()
    },errorResponse=>this.templatesService.errorResponse(errorResponse));
  }

  getAll(): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(this.url + "getAll");
  }

  getById(id:number): Observable<SingleResponseModel<Brand>> {
    return this.httpClient.get<SingleResponseModel<Brand>>(this.url + "getById?id="+id);
  }
}
