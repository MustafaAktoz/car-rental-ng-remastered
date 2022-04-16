import { BrandId, ColorId } from './../../../../models/constants/entity-ids';
import { CarDetailByIdPath } from './../../../../models/constants/paths';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetailDTO } from 'src/app/models/entities/dtos/car-detail-dto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  filterText:string
  carDetailDTOs: CarDetailDTO[]
  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params[BrandId]) this.getDetailsByBrandId(params[BrandId])
      else if (params[ColorId]) this.getDetailsByColorId(params[ColorId])
      else this.getDetails();
    })
  }

  getDetails() {
    this.carService.getDetails().subscribe(response => {
      this.carDetailDTOs = response.data
    })
  }

  getDetailsByBrandId(brandId: number) {
    this.carService.getDetailsByBrandId(brandId).subscribe(response => {
      this.carDetailDTOs = response.data
    })
  }

  getDetailsByColorId(colorId: number) {
    this.carService.getDetailsByColorId(colorId).subscribe(response => {
      this.carDetailDTOs = response.data
    })
  }
}