import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandListComponent } from './components/admin/lists/brand-list/brand-list.component';
import { ColorListComponent } from './components/admin/lists/color-list/color-list.component';
import { CustomerListComponent } from './components/admin/lists/customer-list/customer-list.component';
import { NaviComponent } from './components/public/layouts/navi/navi.component';
import { CarDetailListComponent } from './components/admin/lists/car-detail-list/car-detail-list.component';
import { RentalDetailListComponent } from './components/admin/lists/rental-detail-list/rental-detail-list.component';
import { BrandSelectOptionCarFilterComponent } from './components/public/layouts/brand-select-option-car-filter/brand-select-option-car-filter.component';
import { ColorSelectOptionCarFilterComponent } from './components/public/layouts/color-select-option-car-filter/color-select-option-car-filter.component';
import { BrandAndColorSelectOptionCarFilterComponent } from './components/public/layouts/brand-and-color-select-option-car-filter/brand-and-color-select-option-car-filter.component';
import { CarDetailsComponent } from './components/public/pages/car-details/car-details.component';
import { CarDetailComponent } from './components/public/pages/car-detail/car-detail.component';
import { CarImagesSliderByCarIdComponent } from './components/public/layouts/car-images-slider-by-car-id/car-images-slider-by-car-id.component';
import { CarDetailsButtonComponent } from './components/public/buttons/car-details-button/car-details-button.component';

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
    CarDetailsButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
