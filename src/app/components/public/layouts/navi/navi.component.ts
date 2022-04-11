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

  routeToAddCar() { this.routerService.addCarPage() }
  routeToAddBrand() { this.routerService.addBrandPage() }
  routeToAddColor() { this.routerService.addColorPage() }
  routeToCarDetailList() { this.routerService.carDetailListPage() }
  routeToBrandList() { this.routerService.brandListPage() }
  routeToColorList() { this.routerService.colorListPage() }
  routeToRentalDetailList() { this.routerService.rentalDetailListPage() }
  routeToCustomerList() { this.routerService.customerListPage() }
}