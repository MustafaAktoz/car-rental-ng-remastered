import { AddCarImageComponent } from './components/admin/pages/adds/add-car-image/add-car-image.component';
import { GuestGuard } from './guards/guest.guard';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './components/public/pages/login/login.component';
import { BrandId, ColorId, CarId } from './models/constants/entity-ids';
import { AddCarComponent } from './components/admin/pages/adds/add-car/add-car.component';
import { RentComponent } from './components/user/pages/rent/rent.component';
import { CarDetailsPath, CarDetailsByBrandIdPath, CarDetailByIdPath, BrandListPath, ColorListPath, CustomerListPath, CarDetailListPath, RentalDetailListPath, CarDetailsByColorIdPath, RentByCarIdPath, PayPath, AddCarPath, AddBrandPath, AddColorPath, LoginPath, RegisterPath, ProfilePath, HomePagePath, AddCarImageByCarIdPath } from './models/constants/paths';
import { RentalDetailListComponent } from './components/admin/pages/lists/rental-detail-list/rental-detail-list.component';
import { CarDetailListComponent } from './components/admin/pages/lists/car-detail-list/car-detail-list.component';
import { CustomerListComponent } from './components/admin/pages/lists/customer-list/customer-list.component';
import { ColorListComponent } from './components/admin/pages/lists/color-list/color-list.component';
import { BrandListComponent } from './components/admin/pages/lists/brand-list/brand-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './components/public/pages/car-details/car-details.component';
import { CarDetailComponent } from './components/public/pages/car-detail/car-detail.component';
import { PayComponent } from './components/user/pages/pay/pay.component';
import { AddBrandComponent } from './components/admin/pages/adds/add-brand/add-brand.component';
import { AddColorComponent } from './components/admin/pages/adds/add-color/add-color.component';
import { RegisterComponent } from './components/public/pages/register/register.component';
import { ProfileComponent } from './components/user/pages/profile/profile.component';

const routes: Routes = [
  { path: HomePagePath, component: CarDetailsComponent },
  { path: CarDetailsPath, component: CarDetailsComponent },
  { path: CarDetailsByBrandIdPath + ":" + BrandId, component: CarDetailsComponent },
  { path: CarDetailsByColorIdPath + ":" + ColorId, component: CarDetailsComponent },
  { path: CarDetailByIdPath + ":" + CarId, component: CarDetailComponent },
  { path: BrandListPath, component: BrandListComponent, canActivate: [AdminGuard] },
  { path: ColorListPath, component: ColorListComponent, canActivate: [AdminGuard] },
  { path: CustomerListPath, component: CustomerListComponent, canActivate: [AdminGuard] },
  { path: CarDetailListPath, component: CarDetailListComponent, canActivate: [AdminGuard] },
  { path: RentalDetailListPath, component: RentalDetailListComponent, canActivate: [AdminGuard] },
  { path: RentByCarIdPath + ":" + CarId, component: RentComponent, canActivate: [LoginGuard] },
  { path: PayPath, component: PayComponent, canActivate: [LoginGuard] },
  { path: AddCarPath, component: AddCarComponent, canActivate: [AdminGuard] },
  { path: AddBrandPath, component: AddBrandComponent, canActivate: [AdminGuard] },
  { path: AddColorPath, component: AddColorComponent, canActivate: [AdminGuard] },
  { path: LoginPath, component: LoginComponent, canActivate: [GuestGuard] },
  { path: RegisterPath, component: RegisterComponent, canActivate: [GuestGuard] },
  { path: ProfilePath, component: ProfileComponent, canActivate: [LoginGuard] },
  { path: AddCarImageByCarIdPath + ":" + CarId, component: AddCarImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
