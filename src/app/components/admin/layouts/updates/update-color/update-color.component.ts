import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FormIsMissing } from 'src/app/models/constants/messages';
import { Color } from 'src/app/models/entities/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-update-color',
  templateUrl: './update-color.component.html',
  styleUrls: ['./update-color.component.css']
})
export class UpdateColorComponent implements OnInit {
  @Input() currentColorFromParent:Color

  updateFormGroup: FormGroup
  constructor(private colorService: ColorService, private formBuilder: FormBuilder,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createUpdateFormGroup();
  }

  createUpdateFormGroup() {
    this.updateFormGroup = this.formBuilder.group({
      name: [this.currentColorFromParent.name, Validators.required]
    })
  }

  update(){
    if(this.updateFormGroup.valid){
      let color:Color=Object.assign({id:this.currentColorFromParent.id},this.updateFormGroup.value)
      this.colorService.update(color)
    }
    else this.toastrService.error(FormIsMissing)
  }
}
