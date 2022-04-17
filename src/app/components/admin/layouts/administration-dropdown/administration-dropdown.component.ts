import { AdminChildComponentBaseComponent } from './../../bases/admin-child-component-base/admin-child-component-base.component';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration-dropdown',
  templateUrl: './administration-dropdown.component.html',
  styleUrls: ['./administration-dropdown.component.css']
})
export class AdministrationDropdownComponent extends AdminChildComponentBaseComponent implements OnInit {

  constructor(public override authService:AuthService) {
    super(authService)
    this.innerHTML = "Yönetim"
    this.classFromParent = "btn dropdown-toggle text-light"
  }

  ngOnInit(): void {
  }
}
