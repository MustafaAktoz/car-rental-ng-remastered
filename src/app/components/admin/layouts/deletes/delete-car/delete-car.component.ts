import { AuthService } from 'src/app/services/auth.service';
import { CarService } from './../../../../../services/car.service';
import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/models/entities/car';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent extends AdminChildComponentBaseComponent implements OnInit {
  @Input() currentCarFromParent: Car

  constructor(private carService: CarService, public override authService: AuthService) { 
    super(authService) 
    this.innerHTML="Sil"
  }

  ngOnInit(): void {
  }

  delete() {
    this.carService.delete(this.currentCarFromParent)
  }

}
