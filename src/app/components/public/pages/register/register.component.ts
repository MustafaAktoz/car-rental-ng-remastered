import { FormIsMissing } from './../../../../models/constants/messages';
import { ToastrService } from 'ngx-toastr';
import { RegisterDTO } from './../../../../models/entities/dtos/register-dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFormGroup:FormGroup
  constructor(private authService:AuthService, private formBuilder:FormBuilder, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createRegisterFormGroup()
  }

  createRegisterFormGroup(){
    this.registerFormGroup=this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
    })
  }

  register(){
    if(this.registerFormGroup.valid){
      let registerDTO:RegisterDTO=Object.assign({},this.registerFormGroup.value)
      this.authService.register(registerDTO)
    }
    else this.toastrService.error(FormIsMissing)
  }
}
