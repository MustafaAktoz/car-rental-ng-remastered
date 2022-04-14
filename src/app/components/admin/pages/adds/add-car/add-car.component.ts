import { FormIsMissing } from '../../../../../models/constants/messages';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/entities/color';
import { Brand } from 'src/app/models/entities/brand';
import { BrandService } from 'src/app/services/brand.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Car } from '../../../../../models/entities/car';
import { CarService } from 'src/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  brands: Brand[]
  colors: Color[]

  addFormGroup: FormGroup
  constructor(private carService: CarService, private formBuilder: FormBuilder, private brandService: BrandService,
    private colorService: ColorService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getBrands()
    this.getColors()
    this.createAddFormGroup()
  }

  createAddFormGroup() {
    this.addFormGroup = this.formBuilder.group({
      brandId: ["", Validators.required],
      colorId: ["", Validators.required],
      name: ["", Validators.required],
      modelYear: ["", Validators.required],
      dailyPrice: ["", Validators.required],
      findeksPoint: ["", Validators.required],
      description: ["", Validators.required],
    })
  }

  add() {
    if (this.addFormGroup.valid) {
      let car: Car = Object.assign({}, this.addFormGroup.value)
      this.carService.add(car)
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
