import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { Component, OnInit } from '@angular/core';
import { UserChildComponentBaseComponent } from '../../../bases/user-child-component-base/user-child-component-base.component';

@Component({
  selector: 'app-route-to-profile-page-button',
  templateUrl: './route-to-profile-page-button.component.html',
  styleUrls: ['./route-to-profile-page-button.component.css']
})
export class RouteToProfilePageButtonComponent extends UserChildComponentBaseComponent implements OnInit {

  constructor(private routerService:RouterService, public override authService:AuthService) { super(authService) }

  ngOnInit(): void {
  }

  routeToProfilePage(){
    this.routerService.profilePage()
  }
}
