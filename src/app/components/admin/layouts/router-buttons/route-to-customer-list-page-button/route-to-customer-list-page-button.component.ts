import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-route-to-customer-list-page-button',
  templateUrl: './route-to-customer-list-page-button.component.html',
  styleUrls: ['./route-to-customer-list-page-button.component.css']
})
export class RouteToCustomerListPageButtonComponent implements OnInit {

  constructor(private routerService:RouterService, private authService:AuthService) { }

  ngOnInit(): void {
  }

  isAdmin(){
    return this.authService.isAdmin()
  }

  routeToCustomerListPage(){
    this.routerService.customerListPage()
  }
}
