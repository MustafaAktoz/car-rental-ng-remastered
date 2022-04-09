import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BrandListPath, CarDetailListPath, CarDetailsByBrandIdPath, CarDetailsByColorIdPath, CarDetailsPath, ColorListPath, CustomerListPath, RentalDetailListPath } from '../models/constants/paths';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  routeToCarDetailList() {
    this.router.navigate([CarDetailListPath])
  }

  routeToCarDetails() {
    this.router.navigate([CarDetailsPath])
  }

  routeToBrandList() {
    this.router.navigate([BrandListPath])
  }

  routeToColorList() {
    this.router.navigate([ColorListPath])
  }

  routeToRentalDetailList() {
    this.router.navigate([RentalDetailListPath])
  }

  routeToCustomerList() {
    this.router.navigate([CustomerListPath])
  }

  routeToCarDetailsByBrandId(currentBrandId: number) {
    if (currentBrandId > 0) this.router.navigate([CarDetailsByBrandIdPath + currentBrandId])
  }

  routeToCarDetailsByColorId(currentColorId: number) {
    if (currentColorId > 0) this.router.navigate([CarDetailsByColorIdPath + currentColorId])
  }
}
