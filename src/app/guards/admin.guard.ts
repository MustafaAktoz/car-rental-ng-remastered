import { YouAreNotAuthorized } from './../models/constants/messages';
import { ToastrService } from 'ngx-toastr';
import { RouterService } from './../services/router.service';
import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(private authService: AuthService, private routerService:RouterService, private toastrService:ToastrService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.isAdmin()) return true

    this.toastrService.error(YouAreNotAuthorized)
    this.routerService.homePage()
    return false;
  }

}
