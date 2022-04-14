import { AuthService } from 'src/app/services/auth.service';
import { Customer } from 'src/app/models/entities/customer';
import { CustomerService } from '../../../../services/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-findeks-point-board',
  templateUrl: './findeks-point-board.component.html',
  styleUrls: ['./findeks-point-board.component.css']
})
export class FindeksPointBoardComponent implements OnInit {

  currentCustomer: Customer
  constructor(private customerService: CustomerService, private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.loggedIn())
      this.getCurrentCustomer()
  }

  loggedIn() {
    return this.authService.loggedIn()
  }

  getCurrentCustomer() {
    this.customerService.getCurrentCustomer().subscribe(response => {
      this.currentCustomer = response.data
    })
  }
}