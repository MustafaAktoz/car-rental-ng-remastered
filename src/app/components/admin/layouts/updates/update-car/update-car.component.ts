import { AuthService } from './../../../../../services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormIsMissing } from 'src/app/models/constants/messages';
import { Brand } from 'src/app/models/entities/brand';
import { Car } from 'src/app/models/entities/car';
import { Color } from 'src/app/models/entities/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent extends AdminChildComponentBaseComponent implements OnInit {
  @Input() currentCarFromParent: Car

  brands: Brand[]
  colors: Color[]

  updateFormGroup: FormGroup
  constructor(private carService: CarService, private formBuilder: FormBuilder, private brandService: BrandService,
    private colorService: ColorService, private toastrService: ToastrService, public override authService:AuthService) { super(authService) }

  ngOnInit(): void {
    this.getBrands()
    this.getColors()
    this.createUpdateFormGroup()
  }

  createUpdateFormGroup() {
    this.updateFormGroup = this.formBuilder.group({
      brandId: [this.currentCarFromParent.brandId, Validators.required],
      colorId: [this.currentCarFromParent.colorId, Validators.required],
      name: [this.currentCarFromParent.name, Validators.required],
      modelYear: [this.currentCarFromParent.modelYear, Validators.required],
      dailyPrice: [this.currentCarFromParent.dailyPrice, Validators.required],
      description: [this.currentCarFromParent.description, Validators.required],
      findeksPoint: [this.currentCarFromParent.findeksPoint, Validators.required],
    })
  }

  update() {
    if (this.updateFormGroup.valid) {
      let car: Car = Object.assign({ id: this.currentCarFromParent.id }, this.updateFormGroup.value)
      this.carService.update(car)
    }
    else this.toastrService.error(FormIsMissing)

  }

  getBrands() {
    this.brandService.getAll().subscribe(response => {
      this.brands = response.data
    })
  }

  getColors() {
    this.colorService.getAll().subscribe(response => {
      this.colors = response.data
    })
  }
}
