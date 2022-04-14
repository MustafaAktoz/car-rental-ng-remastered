import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from '../../../../../services/router.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-to-add-car-page-button',
  templateUrl: './route-to-add-car-page-button.component.html',
  styleUrls: ['./route-to-add-car-page-button.component.css']
})
export class RouteToAddCarPageButtonComponent implements OnInit {

  constructor(private routerService:RouterService, private authService:AuthService) { }

  ngOnInit(): void {
  }

  isAdmin(){
    return this.authService.isAdmin()
  }

  routeToAddCarPage(){
    this.routerService.addCarPage()
  }

}
