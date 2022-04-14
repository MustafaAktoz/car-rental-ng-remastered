import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-route-to-login-page-button',
  templateUrl: './route-to-login-page-button.component.html',
  styleUrls: ['./route-to-login-page-button.component.css']
})
export class RouteToLoginPageButtonComponent implements OnInit {

  constructor(private routerService:RouterService, private authService:AuthService) { }

  ngOnInit(): void {
  }

  loggedIn():boolean{
    return this.authService.loggedIn()
  }

  routeToLoginPage(){
    this.routerService.loginPage()
  }
}
