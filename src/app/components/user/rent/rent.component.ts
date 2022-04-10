import { FormIsMissing } from './../../../models/constants/messages';
import { ToastrService } from 'ngx-toastr';
import { TemplatesService } from './../../../services/templates.service';
import { RentalKey } from './../../../models/constants/local-storage-keys';
import { RentalService } from './../../../services/rental.service';
import { RouterService } from 'src/app/services/router.service';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from './../../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rental } from 'src/app/models/entities/rental';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  addFormGroup: FormGroup
  currentCarId: number
  constructor(private localStorageService: LocalStorageService, private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute, private routerService: RouterService,
    private rentalService: RentalService, private templatesService:TemplatesService,
    private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createAddFormGroup()
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"])
        this.currentCarId = params["carId"]
    })
  }

  createAddFormGroup() {
    this.addFormGroup = this.formBuilder.group({
      rentDate: ["", Validators.required],
      returnDate: [null],
    })
  }

  rentInfoSave() {
    if (this.addFormGroup.valid) {
      let rental: Rental = Object.assign({}, this.addFormGroup.value)
      rental.carId = Number.parseInt(this.currentCarId.toString());
      rental.customerId = 2
      this.rentalService.rulesForAdding(rental).subscribe(response => {
        this.localStorageService.save(RentalKey, rental)
        this.routerService.payment()
      },errorResponse=>this.templatesService.errorResponse(errorResponse))
    }
    else {
      this.toastrService.error(FormIsMissing)
    }

  }
}
