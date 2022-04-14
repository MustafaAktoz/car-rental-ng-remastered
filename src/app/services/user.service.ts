import { TemplatesService } from './templates.service';
import { ToastrService } from 'ngx-toastr';
import { ResponseModel } from './../models/result/response_model';
import { AuthService } from 'src/app/services/auth.service';
import { ApiUrl } from './../models/constants/urls';
import { SingleResponseModel } from './../models/result/single-response-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from '../models/entities/dtos/user-dto';
import { UpdateFirstAndLastNameDTO } from '../models/entities/dtos/update-first-and-last-name-dto';
import { UpdateEmailDTO } from '../models/entities/dtos/update-email-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = ApiUrl + "users/"
  constructor(private httpClient: HttpClient, private authService: AuthService, private toastrService: ToastrService,
    private templatesService: TemplatesService) { }

  updateFirstAndLastName(updateFirstAndLastNameDTO: UpdateFirstAndLastNameDTO) {
    this.httpClient.post<ResponseModel>(this.url + "updateFirstAndLastName", updateFirstAndLastNameDTO).subscribe(response => {
      this.toastrService.success(response.message);
      window.location.reload()
    }, errorResponse => this.templatesService.errorResponse(errorResponse));
  }

  updateEmail(updateEmailDTO: UpdateEmailDTO) {
    this.httpClient.post<ResponseModel>(this.url + "updateEmail", updateEmailDTO).subscribe(response => {
      this.toastrService.success(response.message);
      window.location.reload()
    }, errorResponse => this.templatesService.errorResponse(errorResponse));
  }

  getDTOById(id: number) {
    return this.httpClient.get<SingleResponseModel<UserDTO>>(this.url + "getDTOById?id=" + id)
  }

  getCurrentUserDTO() {
    let currentUserId = this.authService.getCurrentUserId
    return this.getDTOById(currentUserId)
  }
}
