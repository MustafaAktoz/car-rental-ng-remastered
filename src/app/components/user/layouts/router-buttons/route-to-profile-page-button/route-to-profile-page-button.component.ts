import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-to-profile-page-button',
  templateUrl: './route-to-profile-page-button.component.html',
  styleUrls: ['./route-to-profile-page-button.component.css']
})
export class RouteToProfilePageButtonComponent implements OnInit {

  constructor(private routerService:RouterService,private authService:AuthService) { }

  ngOnInit(): void {
  }
  
  loggedIn(){
    return this.authService.loggedIn()
  }

  routeToProfilePage(){
    this.routerService.profilePage()
  }
}
