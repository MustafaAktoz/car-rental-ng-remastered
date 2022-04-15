import { AdminRole } from './../models/constants/roles';
import { ResponseModel } from './../models/result/response_model';
import { RouterService } from './router.service';
import { TemplatesService } from './templates.service';
import { ToastrService } from 'ngx-toastr';
import { TokenKey } from './../models/constants/local-storage-keys';
import { LocalStorageService } from './local-storage.service';
import { RegisterDTO } from './../models/entities/dtos/register-dto';
import { LoginDTO } from './../models/entities/dtos/login-dto';
import { ApiUrl } from './../models/constants/urls';
import { AccessToken } from './../models/entities/other/access-token';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleResponseModel } from '../models/result/single-response-model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UpdatePasswordDTO } from '../models/entities/dtos/update-password-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelperService: JwtHelperService = new JwtHelperService()

  url = ApiUrl + "auth/"
  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService, private toastrService: ToastrService,
    private templatesService: TemplatesService, private routerService: RouterService) { }

  login(loginDTO: LoginDTO) {
    this.httpClient.post<SingleResponseModel<AccessToken>>(this.url + "login", loginDTO).subscribe(response => {
      this.localStorageService.save(TokenKey, response.data.token);
      this.toastrService.success(response.message)
      window.location.reload()
    }, errorResponse => this.templatesService.errorResponse(errorResponse))
  }

  register(registerDTO: RegisterDTO) {
    this.httpClient.post<SingleResponseModel<AccessToken>>(this.url + "register", registerDTO).subscribe(response => {
      this.localStorageService.save(TokenKey, response.data.token);
      this.toastrService.success(response.message)
      window.location.reload()
    }, errorResponse => this.templatesService.errorResponse(errorResponse))
  }

  logout() {
    this.localStorageService.remove(TokenKey)
    window.location.reload()
  }

  updatePassword(updatePasswordDTO: UpdatePasswordDTO) {
    this.httpClient.post<ResponseModel>(this.url + "updatePassword", updatePasswordDTO).subscribe(response => {
      this.toastrService.success(response.message);
      window.location.reload();
    }, errorResponse => this.templatesService.errorResponse(errorResponse))
  }

  get getToken() {
    return this.localStorageService.get(TokenKey)
  }

  get getDecodedToken() {
    let token = this.getToken
    return this.jwtHelperService.decodeToken(token)
  }

  get getCurrentUserId() {

    let decodedToken = this.getDecodedToken
    let nameidentifierString = Object.keys(decodedToken).filter(t => t.endsWith("/nameidentifier"))[0]
    let userId: number = decodedToken[nameidentifierString]
    return userId
  }

  loggedIn() {
    let token = this.getToken
    return !this.jwtHelperService.isTokenExpired(token);
  }

  isAdmin() {
    if (!this.loggedIn()) return false

    let decodedToken = this.getDecodedToken

    let roleString = Object.keys(decodedToken).filter(t => t.endsWith("/role"))[0]

    if (roleString)
      for (let i = 0; i < decodedToken[roleString].length; i++)
        if (decodedToken[roleString][i] === AdminRole) return true

    return false
  }


}
