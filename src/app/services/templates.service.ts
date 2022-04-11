import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  constructor(private toastrService: ToastrService) { }

  errorResponse(errorResponse: any) {
    console.log(errorResponse)
    if (errorResponse.error.Message) this.toastrService.error(errorResponse.error.Message)
    this.errorResultResponse(errorResponse)
    this.fluentValidationErrorResponse(errorResponse)
  }

  private errorResultResponse(errorResponse: any) {
    if (errorResponse.error.message) this.toastrService.error(errorResponse.error.message)
    this.fluentValidationErrorResponse(errorResponse)
  }

  private fluentValidationErrorResponse(errorResponse: any) {
    if (errorResponse.error.FluentValidationErrors) {
      for (let i = 0; i < errorResponse.error.FluentValidationErrors.length; i++)
        this.toastrService.error(errorResponse.error.FluentValidationErrors[i].ErrorMessage);
    }
  }
}
