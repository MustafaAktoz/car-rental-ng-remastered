import { RentalDetailListComponent } from './components/admin/lists/rental-detail-list/rental-detail-list.component';
import { CarDetailListComponent } from './components/admin/lists/car-detail-list/car-detail-list.component';
import { CustomerListComponent } from './components/admin/lists/customer-list/customer-list.component';
import { ColorListComponent } from './components/admin/lists/color-list/color-list.component';
import { BrandListComponent } from './components/admin/lists/brand-list/brand-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"brand-list",component:BrandListComponent},
  {path:"color-list",component:ColorListComponent},
  {path:"customer-list",component:CustomerListComponent},
  {path:"car-detail-list",component:CarDetailListComponent},
  {path:"rental-detail-list",component:RentalDetailListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
