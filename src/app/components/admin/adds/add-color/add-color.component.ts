import { Color } from 'src/app/models/entities/color';
import { ColorService } from 'src/app/services/color.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormIsMissing } from 'src/app/models/constants/messages';

@Component({
  selector: 'app-add-color',
  templateUrl: './add-color.component.html',
  styleUrls: ['./add-color.component.css']
})
export class AddColorComponent implements OnInit {

  addFormGroup: FormGroup
  constructor(private colorService: ColorService, private formBuilder: FormBuilder,private toastrService:ToastrService) { }

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
      let color:Color=Object.assign({},this.addFormGroup.value)
      this.colorService.add(color)
    }
    else this.toastrService.error(FormIsMissing)
  }
}
