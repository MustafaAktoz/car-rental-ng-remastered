import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandListComponent } from './components/admin/lists/brand-list/brand-list.component';
import { ColorListComponent } from './components/admin/lists/color-list/color-list.component';
import { CustomerListComponent } from './components/admin/lists/customer-list/customer-list.component';
import { NaviComponent } from './components/public/layouts/navi/navi.component';
import { CarDetailListComponent } from './components/admin/lists/car-detail-list/car-detail-list.component';
import { RentalDetailListComponent } from './components/admin/lists/rental-detail-list/rental-detail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandListComponent,
    ColorListComponent,
    CustomerListComponent,
    NaviComponent,
    CarDetailListComponent,
    RentalDetailListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
