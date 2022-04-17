import { RouterService } from 'src/app/services/router.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PublicChildComponentBaseComponent } from '../../../bases/public-child-component-base/public-child-component-base.component';

@Component({
  selector: 'app-route-to-car-details-page-button',
  templateUrl: './route-to-car-details-page-button.component.html',
  styleUrls: ['./route-to-car-details-page-button.component.css']
})
export class RouteToCarDetailsPageButtonComponent extends PublicChildComponentBaseComponent implements OnInit {
  
  constructor(private routerService: RouterService, public override authService:AuthService) { 
    super(authService) 
    this.innerHTML = "Tüm Arabalar"
  }

  ngOnInit(): void {
  }

  routeToCarDetailsPage(){
    this.routerService.carDetailsPage()
  }
}