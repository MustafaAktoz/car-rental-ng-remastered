import { BrandListPath, CarDetailListPath, ColorListPath, CustomerListPath, RentalDetailListPath } from './../../../../models/constants/paths';
import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private routerService: RouterService) { }

  ngOnInit(): void {
  }

  routeToCarDetailList() { this.routerService.carDetailList() }
  routeToBrandList() { this.routerService.brandList() }
  routeToColorList() { this.routerService.colorList() }
  routeToRentalDetailList() { this.routerService.rentalDetailList() }
  routeToCustomerList() { this.routerService.customerList() }
}