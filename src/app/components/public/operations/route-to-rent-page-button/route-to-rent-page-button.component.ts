import { RouterService } from 'src/app/services/router.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-to-rent-page-button',
  templateUrl: './route-to-rent-page-button.component.html',
  styleUrls: ['./route-to-rent-page-button.component.css']
})
export class RouteToRentPageButtonComponent implements OnInit {

  @Input() currentCarIdFromParent: number
  currenCarId: number
  constructor(private routerService: RouterService) { }

  ngOnInit(): void {

  }

  routeToRentPage() {
    this.routerService.rentPage(this.currentCarIdFromParent);
  }

}
