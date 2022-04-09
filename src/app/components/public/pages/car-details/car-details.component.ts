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

  carDetailDTOs: CarDetailDTO[]
  constructor(private carService: CarService, private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) this.getDetailsByBrandId(params["brandId"])
      else if (params["colorId"]) this.getDetailsByColorId(params["colorId"])
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

  routeToCarDetailById(id:number){this.router.navigate([CarDetailByIdPath+id])}
}
