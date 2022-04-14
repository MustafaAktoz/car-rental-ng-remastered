import { AddBrandPath, AddCarPath, AddColorPath, DeleteBrandPath, DeleteCarPath, DeleteColorPath, PayPath, RentByCarIdPath, UpdateBrandPath, UpdateCarPath, UpdateColorPath, LoginPath, RegisterPath, ProfilePath, HomePagePath } from './../models/constants/paths';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BrandListPath, CarDetailListPath, CarDetailsByBrandIdPath, CarDetailsByColorIdPath, CarDetailsPath, ColorListPath, CustomerListPath, RentalDetailListPath } from '../models/constants/paths';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  homePage(){
    this.router.navigate([HomePagePath])
  }

  addCarPage() {
    this.router.navigate([AddCarPath])
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

  carDetailsPageByBrandId(currentBrandId: number) {
    if (currentBrandId > 0) this.router.navigate([CarDetailsByBrandIdPath + currentBrandId])
  }

  carDetailsPageByColorId(currentColorId: number) {
    if (currentColorId > 0) this.router.navigate([CarDetailsByColorIdPath + currentColorId])
  }

  rentPage(currentCarId: number) {
    if (currentCarId > 0) this.router.navigate([RentByCarIdPath + currentCarId])
  }

  paymentPage() {
    this.router.navigate([PayPath])
  }

  loginPage(){
    this.router.navigate([LoginPath])
  }

  registerPage(){
    this.router.navigate([RegisterPath])
  }

  profilePage(){
    this.router.navigate([ProfilePath])
  }
}
