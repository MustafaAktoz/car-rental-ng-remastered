import { UserDTO } from '../../../../models/entities/dtos/user-dto';
import { UserService } from '../../../../services/user.service';
import { AuthService } from '../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-options',
  templateUrl: './account-options.component.html',
  styleUrls: ['./account-options.component.css']
})
export class AccountOptionsComponent implements OnInit {

  currenUserDTO: UserDTO
  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    if (this.loggedIn())
      this.getCurrentUserDTO()
  }

  loggedIn() {
    return this.authService.loggedIn()
  }

  getCurrentUserDTO() {
    this.userService.getCurrentUserDTO().subscribe(response => {
      this.currenUserDTO = response.data
    })
  }
}
