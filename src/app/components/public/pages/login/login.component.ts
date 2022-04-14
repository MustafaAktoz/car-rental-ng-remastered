import { FormIsMissing } from './../../../../models/constants/messages';
import { ToastrService } from 'ngx-toastr';
import { LoginDTO } from './../../../../models/entities/dtos/login-dto';
import { AuthService } from './../../../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup:FormGroup
  constructor(private authService:AuthService,private formBuilder:FormBuilder, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createLoginFormGroup()
  }

  createLoginFormGroup(){
    this.loginFormGroup=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required],
    })
  }

  login(){
    if(this.loginFormGroup.valid){
      let login:LoginDTO=Object.assign({},this.loginFormGroup.value)
      this.authService.login(login)
    }
    else this.toastrService.error(FormIsMissing)
  }

}
