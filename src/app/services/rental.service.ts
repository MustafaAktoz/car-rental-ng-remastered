import { TemplatesService } from './templates.service';
import { ToastrService } from 'ngx-toastr';
import { ResponseModel } from './../models/result/response_model';
import { Observable } from 'rxjs';
import { ApiUrl } from './../models/constants/urls';
import { ListResponseModel } from './../models/result/list-response-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentalDetailDTO } from '../models/entities/dtos/rental-detail-dto';
import { Rental } from '../models/entities/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  url=ApiUrl+"rentals/"
  constructor(private httpClient:HttpClient,private toastrService:ToastrService,private templatesService:TemplatesService) { }

  add(rental:Rental){
    this.httpClient.post<ResponseModel>(this.url+"add",rental).subscribe(response=>{
      this.toastrService.success(response.message)
    },errorResponse=>this.templatesService.errorResponse(errorResponse));
  }

  rulesForAdding(rental:Rental){
    return this.httpClient.post<ResponseModel>(this.url+"rulesForAdding",rental);
  }

  getDetails():Observable<ListResponseModel<RentalDetailDTO>>{
    return this.httpClient.get<ListResponseModel<RentalDetailDTO>>(this.url+"getDetails");
  }
}
