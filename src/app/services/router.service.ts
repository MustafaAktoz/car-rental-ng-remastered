import { AddBrandPath, AddCarPath, AddColorPath, DeleteBrandPath, DeleteCarPath, DeleteColorPath, PayPath, RentByCarIdPath, UpdateBrandPath, UpdateCarPath, UpdateColorPath, LoginPath, RegisterPath, ProfilePath, HomePagePath, AddCarImageByCarIdPath, CarDetailByIdPath } from './../models/constants/paths';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BrandListPath, CarDetailListPath, CarDetailsByBrandIdPath, CarDetailsByColorIdPath, CarDetailsPath, ColorListPath, CustomerListPath, RentalDetailListPath } from '../models/constants/paths';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  homePage() {
    this.router.navigate([HomePagePath])
  }

  addCarPage() {
    this.router.navigate([AddCarPath])
  }


  addCarImagePageByCarId(carId: number) {
    this.router.navigate([AddCarImageByCarIdPath + carId])
  }

  addBrandPage() {
    this.router.navigate([AddBrandPath])
  }

  addColorPage() {
    this.router.navigate([AddColorPath])
  }

  carDetailListPage() {
    this.router.navigate([CarDetailListPath])
  }

  carDetailsPage() {
    this.router.navigate([CarDetailsPath])
  }

  carDetailPageById(id: number) {
    this.router.navigate([CarDetailByIdPath + id])
  }

  brandListPage() {
    this.router.navigate([BrandListPath])
  }

  colorListPage() {
    this.router.navigate([ColorListPath])
  }

  rentalDetailListPage() {
    this.router.navigate([RentalDetailListPath])
  }

  customerListPage() {
    this.router.navigate([CustomerListPath])
  }

  carDetailsPageByBrandId(brandId: number) {
    if (brandId > 0) this.router.navigate([CarDetailsByBrandIdPath + brandId])
  }

  carDetailsPageByColorId(colorId: number) {
    if (colorId > 0) this.router.navigate([CarDetailsByColorIdPath + colorId])
  }

  rentPage(carId: number) {
    if (carId > 0) this.router.navigate([RentByCarIdPath + carId])
  }

  paymentPage() {
    this.router.navigate([PayPath])
  }

  loginPage() {
    this.router.navigate([LoginPath])
  }

  registerPage() {
    this.router.navigate([RegisterPath])
  }

  profilePage() {
    this.router.navigate([ProfilePath])
  }
}
