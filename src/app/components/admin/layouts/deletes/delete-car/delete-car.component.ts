import { CarService } from './../../../../../services/car.service';
import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/models/entities/car';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit {
  @Input() currentCarFromParent:Car

  constructor(private carService:CarService) { }

  ngOnInit(): void {
  }

  delete(){
    this.carService.delete(this.currentCarFromParent)
  }

}
