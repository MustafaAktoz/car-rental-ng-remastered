import { BaseUrl } from '../../../../models/constants/urls';
import { ActivatedRoute } from '@angular/router';
import { CarImageService } from '../../../../services/car-image.service';
import { CarImage } from '../../../../models/entities/car-image';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-images-slider-by-car-id',
  templateUrl: './car-images-slider-by-car-id.component.html',
  styleUrls: ['./car-images-slider-by-car-id.component.css']
})
export class CarImagesSliderByCarIdComponent implements OnInit {

  carImages: CarImage[]
  constructor(private carImagesService: CarImageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params["carId"])
      this.getAllByCarId(params["carId"])
    })
  }

  getAllByCarId(carId: number) {
    this.carImagesService.getAllByCarId(carId).subscribe(response => {
      this.carImages = response.data
    })
  }

  imageConfiguration(imagePath:string){
    return BaseUrl+imagePath;
  }

  getActiveString(carImage:CarImage){
    if(carImage===this.carImages[0])
    return "active"

    return ""
  }
}
