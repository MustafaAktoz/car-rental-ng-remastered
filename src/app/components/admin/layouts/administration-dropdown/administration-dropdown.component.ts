import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration-dropdown',
  templateUrl: './administration-dropdown.component.html',
  styleUrls: ['./administration-dropdown.component.css']
})
export class AdministrationDropdownComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  isAdmin(){
    return this.authService.isAdmin()
  }
}
