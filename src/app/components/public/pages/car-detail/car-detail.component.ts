import { CarId } from './../../../../models/constants/entity-ids';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDTO } from '../../../../models/entities/dtos/car-detail-dto';
import { CarService } from 'src/app/services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetailDto: CarDetailDTO
  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params[CarId])
        this.getDetailById(params[CarId]);
    })
  }

  getDetailById(id: number) {
    this.carService.getDetailById(id).subscribe(response => {
      this.carDetailDto = response.data
    })
  }
}
