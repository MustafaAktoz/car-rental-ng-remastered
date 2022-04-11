import { AddBrandPath, AddCarPath, AddColorPath, DeleteBrandPath, DeleteCarPath, DeleteColorPath, PayPath, RentByCarIdPath, UpdateBrandPath, UpdateCarPath, UpdateColorPath } from './../models/constants/paths';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BrandListPath, CarDetailListPath, CarDetailsByBrandIdPath, CarDetailsByColorIdPath, CarDetailsPath, ColorListPath, CustomerListPath, RentalDetailListPath } from '../models/constants/paths';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  addCar() {
    this.router.navigate([AddCarPath])
  }

  addBrand() {
    this.router.navigate([AddBrandPath])
  }

  addColor() {
    this.router.navigate([AddColorPath])
  }

  updateCar() {
    this.router.navigate([UpdateCarPath])
  }

  updateBrand() {
    this.router.navigate([UpdateBrandPath])
  }

  updateColor() {
    this.router.navigate([UpdateColorPath])
  }

  deleteCar() {
    this.router.navigate([DeleteCarPath])
  }

  deleteBrand() {
    this.router.navigate([DeleteBrandPath])
  }

  deleteColor() {
    this.router.navigate([DeleteColorPath])
  }

  carDetailList() {
    this.router.navigate([CarDetailListPath])
  }

  carDetails() {
    this.router.navigate([CarDetailsPath])
  }

  brandList() {
    this.router.navigate([BrandListPath])
  }

  colorList() {
    this.router.navigate([ColorListPath])
  }

  rentalDetailList() {
    this.router.navigate([RentalDetailListPath])
  }

  customerList() {
    this.router.navigate([CustomerListPath])
  }

  carDetailsByBrandId(currentBrandId: number) {
    if (currentBrandId > 0) this.router.navigate([CarDetailsByBrandIdPath + currentBrandId])
  }

  carDetailsByColorId(currentColorId: number) {
    if (currentColorId > 0) this.router.navigate([CarDetailsByColorIdPath + currentColorId])
  }

  rentByCarId(currentCarId: number) {
    if (currentCarId > 0) this.router.navigate([RentByCarIdPath + currentCarId])
  }

  payment() {
    this.router.navigate([PayPath])
  }
}
