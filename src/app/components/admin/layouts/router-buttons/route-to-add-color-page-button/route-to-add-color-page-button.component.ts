import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-route-to-add-color-page-button',
  templateUrl: './route-to-add-color-page-button.component.html',
  styleUrls: ['./route-to-add-color-page-button.component.css']
})
export class RouteToAddColorPageButtonComponent implements OnInit {

  constructor(private routerService:RouterService, private authService:AuthService) { }

  ngOnInit(): void {
  }

  isAdmin(){
    return this.authService.isAdmin()
  }

  routeToAddColorPage(){
    this.routerService.addColorPage()
  }

}
