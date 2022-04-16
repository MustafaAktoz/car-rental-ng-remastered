import { RouterService } from './../../../../../services/router.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PublicChildComponentBaseComponent } from '../../../bases/public-child-component-base/public-child-component-base.component';

@Component({
  selector: 'app-route-to-home-page-button',
  templateUrl: './route-to-home-page-button.component.html',
  styleUrls: ['./route-to-home-page-button.component.css']
})
export class RouteToHomePageButtonComponent extends PublicChildComponentBaseComponent implements OnInit {
  
  constructor(private routerService: RouterService, public override authService:AuthService) { super(authService) }

  ngOnInit(): void {
  }

  routeToHomePage(){
    this.routerService.homePage()
  }

}
