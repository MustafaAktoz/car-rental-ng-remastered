import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  constructor(private toastrService:ToastrService) { }

  errorResponse(errorResponse:any){
    if(errorResponse.error.message)
      this.toastrService.error(errorResponse.error.message)
  }
}
