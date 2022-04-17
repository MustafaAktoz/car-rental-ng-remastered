import { AuthService } from './../../../../../services/auth.service';
import { FormIsMissing } from '../../../../../models/constants/messages';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/entities/brand';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css']
})
export class UpdateBrandComponent extends AdminChildComponentBaseComponent implements OnInit {
  @Input() currentBrandFromParent: Brand

  updateFormGroup: FormGroup
  constructor(private brandService: BrandService, private formBuilder: FormBuilder, private toastrService: ToastrService,
    public override authService:AuthService) { 
      super(authService) 
      this.innerHTML = "Güncelle"
    }

  ngOnInit(): void {
    this.createUpdateFormGroup()
  }

  createUpdateFormGroup() {
    this.updateFormGroup = this.formBuilder.group({
      name: [this.currentBrandFromParent.name, Validators.required]
    })
  }

  update() {
    if (this.updateFormGroup.valid) {
      let brand: Brand = Object.assign({ id: this.currentBrandFromParent.id }, this.updateFormGroup.value)
      this.brandService.update(brand);
    }
    else this.toastrService.error(FormIsMissing);

  }
}
