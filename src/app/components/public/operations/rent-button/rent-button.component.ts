import { RouterService } from 'src/app/services/router.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-button',
  templateUrl: './rent-button.component.html',
  styleUrls: ['./rent-button.component.css']
})
export class RentButtonComponent implements OnInit {

  @Input() currentCarIdFromParent: number
  currenCarId: number
  constructor(private routerService: RouterService) { }

  ngOnInit(): void {

  }

  routeToRentByCarId() {
    this.routerService.rentByCarId(this.currentCarIdFromParent);
  }

}
