import { FormIsMissing } from './../../../../models/constants/messages';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/entities/brand';
import { BrandService } from 'src/app/services/brand.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  addFormGroup: FormGroup
  constructor(private brandService: BrandService, private formBuilder: FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createAddFormGroup();
  }

  createAddFormGroup() {
    this.addFormGroup = this.formBuilder.group({
      name: ["", Validators.required]
    })
  }

  add(){
    if(this.addFormGroup.valid){
      let brand:Brand=Object.assign({},this.addFormGroup.value)
      this.brandService.add(brand)
    }
    else this.toastrService.error(FormIsMissing)
    
  }
}
