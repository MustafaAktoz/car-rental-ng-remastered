import { RouterService } from 'src/app/services/router.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-to-car-details-page-button',
  templateUrl: './route-to-car-details-page-button.component.html',
  styleUrls: ['./route-to-car-details-page-button.component.css']
})
export class RouteToCarDetailsPageButtonComponent implements OnInit {

  constructor(private routerService:RouterService) { }

  ngOnInit(): void {
  }

  routeToCarDetailsPage(){
    this.routerService.carDetailsPage()
  }
}