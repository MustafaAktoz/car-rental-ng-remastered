import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDTO } from 'src/app/models/entities/dtos/user-dto';
import { AuthService } from 'src/app/services/auth.service';
import { FormIsMissing } from 'src/app/models/constants/messages';
import { ToastrService } from 'ngx-toastr';
import { UpdatePasswordDTO } from 'src/app/models/entities/dtos/update-password-dto';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  @Input() currentUserDTOFromParent:UserDTO

  updateFormGroup:FormGroup
  constructor(private formBuilder:FormBuilder,private authService:AuthService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createUpdateFormGroup();
  }

  loggedIn(){
    return this.authService.loggedIn()
  }

  createUpdateFormGroup(){
    this.updateFormGroup=this.formBuilder.group({
      password:["",Validators.required],
      newPassword:["",Validators.required],
      newPasswordAgain:["",Validators.required],
    })
  }

  updatePassword(){
    if(this.updateFormGroup.valid){
      let updatePasswordDTO:UpdatePasswordDTO=Object.assign({},this.updateFormGroup.value)
      updatePasswordDTO.id=this.currentUserDTOFromParent.id
      this.authService.updatePassword(updatePasswordDTO)
    }
    else this.toastrService.error(FormIsMissing)
    
  }
}
