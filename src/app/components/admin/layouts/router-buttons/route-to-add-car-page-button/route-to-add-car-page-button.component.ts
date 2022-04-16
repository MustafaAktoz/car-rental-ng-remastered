import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from '../../../../../services/router.service';
import { Component, OnInit } from '@angular/core';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-route-to-add-car-page-button',
  templateUrl: './route-to-add-car-page-button.component.html',
  styleUrls: ['./route-to-add-car-page-button.component.css']
})
export class RouteToAddCarPageButtonComponent extends AdminChildComponentBaseComponent implements OnInit {

  constructor(private routerService:RouterService, public override authService:AuthService) { super(authService) }

  ngOnInit(): void {
  }

  routeToAddCarPage(){
    this.routerService.addCarPage()
  }

}
