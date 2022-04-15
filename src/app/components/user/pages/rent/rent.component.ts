import { Customer } from 'src/app/models/entities/customer';
import { CustomerService } from './../../../../services/customer.service';
import { CarId } from '../../../../models/constants/entity-ids';
import { FormIsMissing } from '../../../../models/constants/messages';
import { ToastrService } from 'ngx-toastr';
import { TemplatesService } from '../../../../services/templates.service';
import { RentalKey } from '../../../../models/constants/local-storage-keys';
import { RentalService } from '../../../../services/rental.service';
import { RouterService } from 'src/app/services/router.service';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../../../../services/local-storage.service';
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
  currentCustomer:Customer
  constructor(private localStorageService: LocalStorageService, private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute, private routerService: RouterService,
    private rentalService: RentalService, private templatesService:TemplatesService,
    private toastrService:ToastrService, private customerService:CustomerService) { }

  ngOnInit(): void {
    this.getCurrentCustomer()
    this.createAddFormGroup()
    
    this.activatedRoute.params.subscribe(params => {
      if (params[CarId]) this.currentCarId = Number(params[CarId])
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
      rental.carId = this.currentCarId
      rental.customerId = this.currentCustomer.id
      rental.returnDate = rental.returnDate?rental.returnDate:null
      
      this.rentalService.rulesForAdding(rental).subscribe(response => {
        this.localStorageService.save(RentalKey, rental)
        this.routerService.paymentPage()
      },errorResponse=>this.templatesService.errorResponse(errorResponse))
      
    }
    else this.toastrService.error(FormIsMissing)
  }

  getCurrentCustomer(){
    this.customerService.getCurrentCustomer().subscribe(response=>{
      this.currentCustomer=response.data
    })
  }
}
