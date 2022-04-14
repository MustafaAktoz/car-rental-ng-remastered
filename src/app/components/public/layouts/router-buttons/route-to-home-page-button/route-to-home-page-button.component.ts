import { RouterService } from './../../../../../services/router.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-to-home-page-button',
  templateUrl: './route-to-home-page-button.component.html',
  styleUrls: ['./route-to-home-page-button.component.css']
})
export class RouteToHomePageButtonComponent implements OnInit {

  constructor(private routerService:RouterService) { }

  ngOnInit(): void {
  }

  routeToHomePage(){
    this.routerService.homePage()
  }

}
