import { UserChildComponentBaseComponent } from './../../../bases/user-child-component-base/user-child-component-base.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormIsMissing } from 'src/app/models/constants/messages';
import { UpdateEmailDTO } from 'src/app/models/entities/dtos/update-email-dto';
import { UserDTO } from 'src/app/models/entities/dtos/user-dto';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-email',
  templateUrl: './update-email.component.html',
  styleUrls: ['./update-email.component.css']
})
export class UpdateEmailComponent extends UserChildComponentBaseComponent implements OnInit {
  @Input() currentUserDTOFromParent: UserDTO

  updateFormGroup: FormGroup
  constructor(private formBuilder: FormBuilder, public override authService: AuthService, private userService: UserService, private toastrService: ToastrService) {
    super(authService)
    this.innerHTML = "Güncelle"
    this.classFromParent = "list-group-item"
  }

  ngOnInit(): void {
    this.createUpdateFormGroup();
  }

  createUpdateFormGroup() {
    this.updateFormGroup = this.formBuilder.group({
      email: [this.currentUserDTOFromParent.email, Validators.required],
    })
  }

  updateEmail() {
    if (this.updateFormGroup.valid) {
      let updateEmailDTO: UpdateEmailDTO = Object.assign({}, this.updateFormGroup.value)
      updateEmailDTO.id = this.currentUserDTOFromParent.id
      this.userService.updateEmail(updateEmailDTO)
    }
    else this.toastrService.error(FormIsMissing)

  }
}
