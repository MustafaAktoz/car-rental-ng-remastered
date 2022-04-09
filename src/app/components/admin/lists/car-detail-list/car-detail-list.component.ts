import { Component, OnInit } from '@angular/core';
import { CarDetailDTO } from 'src/app/models/dtos/car-detail-dto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail-list',
  templateUrl: './car-detail-list.component.html',
  styleUrls: ['./car-detail-list.component.css']
})
export class CarDetailListComponent implements OnInit {

  carDetailDTOs: CarDetailDTO[]
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails() {
    this.carService.getDetails().subscribe(response => {
      this.carDetailDTOs = response.data
    })
  }
}
