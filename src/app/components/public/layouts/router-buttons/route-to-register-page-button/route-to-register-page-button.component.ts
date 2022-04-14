import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-route-to-register-page-button',
  templateUrl: './route-to-register-page-button.component.html',
  styleUrls: ['./route-to-register-page-button.component.css']
})
export class RouteToRegisterPageButtonComponent implements OnInit {

  constructor(private routerService:RouterService, private authService:AuthService) { }

  ngOnInit(): void {
  }

  loggedIn(){
    return this.authService.loggedIn()
  }

  routeToRegisterPage(){
    this.routerService.registerPage()
  }
}
