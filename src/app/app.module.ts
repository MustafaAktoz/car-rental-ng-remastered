import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandListComponent } from './components/admin/lists/brand-list/brand-list.component';
import { ColorListComponent } from './components/admin/lists/color-list/color-list.component';
import { CustomerListComponent } from './components/admin/lists/customer-list/customer-list.component';
import { NaviComponent } from './components/public/layouts/navi/navi.component';
import { CarDetailListComponent } from './components/admin/lists/car-detail-list/car-detail-list.component';
import { RentalDetailListComponent } from './components/admin/lists/rental-detail-list/rental-detail-list.component';
import { BrandSelectOptionCarFilterComponent } from './components/public/operations/brand-select-option-car-filter/brand-select-option-car-filter.component';
import { ColorSelectOptionCarFilterComponent } from './components/public/operations/color-select-option-car-filter/color-select-option-car-filter.component';
import { BrandAndColorSelectOptionCarFilterComponent } from './components/public/layouts/brand-and-color-select-option-car-filter/brand-and-color-select-option-car-filter.component';
import { CarDetailsComponent } from './components/public/pages/car-details/car-details.component';
import { CarDetailComponent } from './components/public/pages/car-detail/car-detail.component';
import { CarImagesSliderByCarIdComponent } from './components/public/layouts/car-images-slider-by-car-id/car-images-slider-by-car-id.component';
import { RouteToCarDetailsPageButtonComponent } from './components/public/operations/route-to-car-details-page-button/route-to-car-details-page-button.component';
import { CarDetailsFilterPipe } from './pipes/car-details-filter.pipe';
import { BrandsFilterPipe } from './pipes/brands-filter.pipe';
import { ColorsFilterPipe } from './pipes/colors-filter.pipe';
import { RentComponent } from './components/user/rent/rent.component';
import { RouteToRentPageButtonComponent } from './components/public/operations/route-to-rent-page-button/route-to-rent-page-button.component';
import { PayComponent } from './components/user/pay/pay.component';
import { AddCarComponent } from './components/admin/adds/add-car/add-car.component';
import { AddBrandComponent } from './components/admin/adds/add-brand/add-brand.component';
import { AddColorComponent } from './components/admin/adds/add-color/add-color.component';
import { UpdateBrandComponent } from './components/admin/updates/update-brand/update-brand.component';
import { UpdateColorComponent } from './components/admin/updates/update-color/update-color.component';
import { UpdateCarComponent } from './components/admin/updates/update-car/update-car.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandListComponent,
    ColorListComponent,
    CustomerListComponent,
    NaviComponent,
    CarDetailListComponent,
    RentalDetailListComponent,
    BrandSelectOptionCarFilterComponent,
    ColorSelectOptionCarFilterComponent,
    BrandAndColorSelectOptionCarFilterComponent,
    CarDetailsComponent,
    CarDetailComponent,
    CarImagesSliderByCarIdComponent,
    RouteToCarDetailsPageButtonComponent,
    CarDetailsFilterPipe,
    BrandsFilterPipe,
    ColorsFilterPipe,
    RentComponent,
    RouteToRentPageButtonComponent,
    PayComponent,
    AddCarComponent,
    AddBrandComponent,
    AddColorComponent,
    UpdateBrandComponent,
    UpdateColorComponent,
    UpdateCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
