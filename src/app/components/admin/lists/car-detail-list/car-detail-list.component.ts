import { Car } from './../../../../models/entities/car';
import { Component, OnInit } from '@angular/core';
import { CarDetailDTO } from 'src/app/models/entities/dtos/car-detail-dto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail-list',
  templateUrl: './car-detail-list.component.html',
  styleUrls: ['./car-detail-list.component.css']
})
export class CarDetailListComponent implements OnInit {

  filterText:string
  carDetailDTOs: CarDetailDTO[]
  cars:Car[]
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getAll()
    this.getDetails()
  }

  getDetails() {
    this.carService.getDetails().subscribe(response => {
      this.carDetailDTOs = response.data
    })
  }

  getAll(){
    this.carService.getAll().subscribe(response=>{
      this.cars=response.data
    })
  }

  getByIdFromInMemory(id:number):Car{
    return this.cars.filter(c=>c.id==id)[0]
  }
}
