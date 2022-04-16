import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarImageService } from './../../../../../services/car-image.service';
import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ResponseModel } from 'src/app/models/result/response_model';
import { CarId } from 'src/app/models/constants/entity-ids';

@Component({
  selector: 'app-add-car-image',
  templateUrl: './add-car-image.component.html',
  styleUrls: ['./add-car-image.component.css']
})
export class AddCarImageComponent implements OnInit {
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  response: string;

  currentCarId:number
  constructor(private carImageService: CarImageService, private toastrService: ToastrService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.currentCarId = params[CarId]
      this.initializeUploader(this.currentCarId)
    })
  }

  initializeUploader(carId:number) {
    this.uploader = new FileUploader({
      url: this.carImageService.url + "add?carId=" + carId,
      removeAfterUpload: true,
      allowedFileType: ["image"]
    });
    
    this.onBefore()

    this.onError();

    this.onSuccess()

    this.hasBaseDropZoneOver = false;

    this.response = '';

    this.uploader.response.subscribe(res => this.response = res);
  }

  onBefore() {
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }
  }

  onSuccess() {
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        let newResponse: ResponseModel = JSON.parse(response)
        this.toastrService.success(newResponse.message)
        window.location.reload()
      }
    }
  }

  onError() {
    this.uploader.onErrorItem = (item, response) => {
      if (response) {
        let newResponse: ResponseModel = JSON.parse(response)
        this.toastrService.error(newResponse.message)
      }
    }
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}