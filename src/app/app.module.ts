import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandListComponent } from './components/admin/pages/lists/brand-list/brand-list.component';
import { ColorListComponent } from './components/admin/pages/lists/color-list/color-list.component';
import { CustomerListComponent } from './components/admin/pages/lists/customer-list/customer-list.component';
import { NaviComponent } from './components/public/layouts/navi/navi.component';
import { CarDetailListComponent } from './components/admin/pages/lists/car-detail-list/car-detail-list.component';
import { RentalDetailListComponent } from './components/admin/pages/lists/rental-detail-list/rental-detail-list.component';
import { BrandSelectOptionCarFilterComponent } from './components/public/layouts/brand-select-option-car-filter/brand-select-option-car-filter.component';
import { ColorSelectOptionCarFilterComponent } from './components/public/layouts/color-select-option-car-filter/color-select-option-car-filter.component';
import { BrandAndColorSelectOptionCarFilterComponent } from './components/public/layouts/brand-and-color-select-option-car-filter/brand-and-color-select-option-car-filter.component';
import { CarDetailsComponent } from './components/public/pages/car-details/car-details.component';
import { CarDetailComponent } from './components/public/pages/car-detail/car-detail.component';
import { CarImagesSliderByCarIdComponent } from './components/public/layouts/car-images-slider-by-car-id/car-images-slider-by-car-id.component';
import { RouteToCarDetailsPageButtonComponent } from './components/public/layouts/router-buttons/route-to-car-details-page-button/route-to-car-details-page-button.component';
import { CarDetailsFilterPipe } from './pipes/car-details-filter.pipe';
import { BrandsFilterPipe } from './pipes/brands-filter.pipe';
import { ColorsFilterPipe } from './pipes/colors-filter.pipe';
import { RentComponent } from './components/user/pages/rent/rent.component';
import { RouteToRentPageButtonComponent } from './components/public/layouts/router-buttons/route-to-rent-page-button/route-to-rent-page-button.component';
import { PayComponent } from './components/user/pages/pay/pay.component';
import { AddCarComponent } from './components/admin/pages/adds/add-car/add-car.component';
import { AddBrandComponent } from './components/admin/pages/adds/add-brand/add-brand.component';
import { AddColorComponent } from './components/admin/pages/adds/add-color/add-color.component';
import { UpdateBrandComponent } from './components/admin/layouts/updates/update-brand/update-brand.component';
import { UpdateColorComponent } from './components/admin/layouts/updates/update-color/update-color.component';
import { UpdateCarComponent } from './components/admin/layouts/updates/update-car/update-car.component';
import { LoginComponent } from './components/public/pages/login/login.component';
import { RegisterComponent } from './components/public/pages/register/register.component';
import { RouteToLoginPageButtonComponent } from './components/public/layouts/router-buttons/route-to-login-page-button/route-to-login-page-button.component';
import { RouteToRegisterPageButtonComponent } from './components/public/layouts/router-buttons/route-to-register-page-button/route-to-register-page-button.component';
import { AccountOptionsComponent } from './components/user/layouts/account-options/account-options.component';
import { LogoutButtonComponent } from './components/user/layouts/logout-button/logout-button.component';
import { FindeksPointBoardComponent } from './components/user/layouts/findeks-point-board/findeks-point-board.component';
import { ProfileComponent } from './components/user/pages/profile/profile.component';
import { UpdateFirstAndLastNameComponent } from './components/user/layouts/updates/update-first-and-last-name/update-first-and-last-name.component';
import { RouteToProfilePageButtonComponent } from './components/user/layouts/router-buttons/route-to-profile-page-button/route-to-profile-page-button.component';
import { UpdateEmailComponent } from './components/user/layouts/updates/update-email/update-email.component';
import { UpdatePasswordComponent } from './components/user/layouts/updates/update-password/update-password.component';
import { PayWithSavedCardsComponent } from './components/user/layouts/pay-with-saved-cards/pay-with-saved-cards.component';
import { RouteToAddCarPageButtonComponent} from './components/admin/layouts/router-buttons/route-to-add-car-page-button/route-to-add-car-page-button.component';
import { RouteToAddBrandPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-add-brand-page-button/route-to-add-brand-page-button.component';
import { RouteToAddColorPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-add-color-page-button/route-to-add-color-page-button.component';
import { RouteToCarDetailListPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-car-detail-list-page-button/route-to-car-detail-list-page-button.component';
import { RouteToBrandListPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-brand-list-page-button/route-to-brand-list-page-button.component';
import { RouteToColorListPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-color-list-page-button/route-to-color-list-page-button.component';
import { RouteToRentalDetailListPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-rental-detail-list-page-button/route-to-rental-detail-list-page-button.component';
import { RouteToCustomerListPageButtonComponent } from './components/admin/layouts/router-buttons/route-to-customer-list-page-button/route-to-customer-list-page-button.component';
import { AdministrationDropdownComponent } from './components/admin/layouts/administration-dropdown/administration-dropdown.component';
import { RouteToHomePageButtonComponent } from './components/public/layouts/router-buttons/route-to-home-page-button/route-to-home-page-button.component';
import { ShowPasswordOnHoverDirective } from './directives/show-password-on-hover.directive';
import { SmallNumberInputComponent } from './form-controls/small-number-input/small-number-input.component';
import { DeleteCarComponent } from './components/admin/layouts/deletes/delete-car/delete-car.component';
import { DeleteBrandComponent } from './components/admin/layouts/deletes/delete-brand/delete-brand.component';
import { DeleteColorComponent } from './components/admin/layouts/deletes/delete-color/delete-color.component';

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
    LoginComponent,
    RegisterComponent,
    RouteToLoginPageButtonComponent,
    RouteToRegisterPageButtonComponent,
    AccountOptionsComponent,
    LogoutButtonComponent,
    FindeksPointBoardComponent,
    ProfileComponent,
    UpdateFirstAndLastNameComponent,
    RouteToProfilePageButtonComponent,
    UpdateEmailComponent,
    UpdatePasswordComponent,
    PayWithSavedCardsComponent,
    RouteToAddCarPageButtonComponent,
    RouteToAddBrandPageButtonComponent,
    RouteToAddColorPageButtonComponent,
    RouteToCarDetailListPageButtonComponent,
    RouteToBrandListPageButtonComponent,
    RouteToColorListPageButtonComponent,
    RouteToRentalDetailListPageButtonComponent,
    RouteToCustomerListPageButtonComponent,
    AdministrationDropdownComponent,
    RouteToHomePageButtonComponent,
    ShowPasswordOnHoverDirective,
    SmallNumberInputComponent,
    DeleteCarComponent,
    DeleteBrandComponent,
    DeleteColorComponent,
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
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
