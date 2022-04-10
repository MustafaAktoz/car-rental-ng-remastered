import { RouterService } from 'src/app/services/router.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-details-button',
  templateUrl: './car-details-button.component.html',
  styleUrls: ['./car-details-button.component.css']
})
export class CarDetailsButtonComponent implements OnInit {

  constructor(private routerService:RouterService) { }

  ngOnInit(): void {
  }

  routeToCarDetails(){
    this.routerService.carDetails()
  }
}
