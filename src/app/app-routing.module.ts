import { DefaultPath, CarDetailsPath, CarDetailsByBrandIdPath, CarDetailByIdPath, BrandListPath, ColorListPath, CustomerListPath, CarDetailListPath, RentalDetailListPath, CarDetailsByColorIdPath } from './models/constants/paths';
import { RentalDetailListComponent } from './components/admin/lists/rental-detail-list/rental-detail-list.component';
import { CarDetailListComponent } from './components/admin/lists/car-detail-list/car-detail-list.component';
import { CustomerListComponent } from './components/admin/lists/customer-list/customer-list.component';
import { ColorListComponent } from './components/admin/lists/color-list/color-list.component';
import { BrandListComponent } from './components/admin/lists/brand-list/brand-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './components/public/pages/car-details/car-details.component';
import { CarDetailComponent } from './components/public/pages/car-detail/car-detail.component';

const routes: Routes = [
  { path: DefaultPath, component: CarDetailsComponent },
  { path: CarDetailsPath, component: CarDetailsComponent },
  { path: CarDetailsByBrandIdPath + ":brandId", component: CarDetailsComponent },
  { path: CarDetailsByColorIdPath + ":colorId", component: CarDetailsComponent },
  { path: CarDetailByIdPath + ":carId", component: CarDetailComponent },
  { path: BrandListPath, component: BrandListComponent },
  { path: ColorListPath, component: ColorListComponent },
  { path: CustomerListPath, component: CustomerListComponent },
  { path: CarDetailListPath, component: CarDetailListComponent },
  { path: RentalDetailListPath, component: RentalDetailListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
