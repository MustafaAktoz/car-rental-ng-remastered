import { UserChildComponentBaseComponent } from './../../../bases/user-child-component-base/user-child-component-base.component';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { UpdateFirstAndLastNameDTO } from 'src/app/models/entities/dtos/update-first-and-last-name-dto';
import { UserDTO } from 'src/app/models/entities/dtos/user-dto';
import { UserService } from 'src/app/services/user.service';
import { FormIsMissing } from 'src/app/models/constants/messages';

@Component({
  selector: 'app-update-first-and-last-name',
  templateUrl: './update-first-and-last-name.component.html',
  styleUrls: ['./update-first-and-last-name.component.css']
})
export class UpdateFirstAndLastNameComponent extends UserChildComponentBaseComponent implements OnInit {
  @Input() currentUserDTOFromParent:UserDTO

  updateFormGroup:FormGroup
  constructor(private formBuilder:FormBuilder, public override authService:AuthService, private userService:UserService,private toastrService:ToastrService) {
    super(authService)
    this.innerHTML = "Güncelle"
    this.classFromParent = "list-group-item"
  }

  ngOnInit(): void {
    this.createUpdateFormGroup();
  }

  createUpdateFormGroup(){
    this.updateFormGroup=this.formBuilder.group({
      firstName:[this.currentUserDTOFromParent.firstName,Validators.required],
      lastName:[this.currentUserDTOFromParent.lastName,Validators.required],
    })
  }

  updateFirstAndLastName(){
    if(this.updateFormGroup.valid){
      let updateFirstAndLastNameDTO:UpdateFirstAndLastNameDTO=Object.assign({},this.updateFormGroup.value)
      updateFirstAndLastNameDTO.id=this.currentUserDTOFromParent.id
      this.userService.updateFirstAndLastName(updateFirstAndLastNameDTO)
    }
    else this.toastrService.error(FormIsMissing)
    
  }
}