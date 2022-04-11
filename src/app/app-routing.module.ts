import { BrandId, ColorId, CarId } from './models/constants/entity-ids';
import { AddCarComponent } from './components/admin/adds/add-car/add-car.component';
import { RentComponent } from './components/user/rent/rent.component';
import { DefaultPath, CarDetailsPath, CarDetailsByBrandIdPath, CarDetailByIdPath, BrandListPath, ColorListPath, CustomerListPath, CarDetailListPath, RentalDetailListPath, CarDetailsByColorIdPath, RentByCarIdPath, PayPath, AddCarPath, AddBrandPath, AddColorPath } from './models/constants/paths';
import { RentalDetailListComponent } from './components/admin/lists/rental-detail-list/rental-detail-list.component';
import { CarDetailListComponent } from './components/admin/lists/car-detail-list/car-detail-list.component';
import { CustomerListComponent } from './components/admin/lists/customer-list/customer-list.component';
import { ColorListComponent } from './components/admin/lists/color-list/color-list.component';
import { BrandListComponent } from './components/admin/lists/brand-list/brand-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './components/public/pages/car-details/car-details.component';
import { CarDetailComponent } from './components/public/pages/car-detail/car-detail.component';
import { PayComponent } from './components/user/pay/pay.component';
import { AddBrandComponent } from './components/admin/adds/add-brand/add-brand.component';
import { AddColorComponent } from './components/admin/adds/add-color/add-color.component';

const routes: Routes = [
  { path: DefaultPath, component: CarDetailsComponent },
  { path: CarDetailsPath, component: CarDetailsComponent },
  { path: CarDetailsByBrandIdPath + ":" + BrandId, component: CarDetailsComponent },
  { path: CarDetailsByColorIdPath + ":" + ColorId, component: CarDetailsComponent },
  { path: CarDetailByIdPath + ":" + CarId, component: CarDetailComponent },
  { path: BrandListPath, component: BrandListComponent },
  { path: ColorListPath, component: ColorListComponent },
  { path: CustomerListPath, component: CustomerListComponent },
  { path: CarDetailListPath, component: CarDetailListComponent },
  { path: RentalDetailListPath, component: RentalDetailListComponent },
  { path: RentByCarIdPath+ ":" + CarId, component: RentComponent },
  { path: PayPath, component: PayComponent },
  { path: AddCarPath, component: AddCarComponent },
  { path: AddBrandPath, component: AddBrandComponent },
  { path: AddColorPath, component: AddColorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
