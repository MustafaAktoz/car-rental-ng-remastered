import { RentalDetailDTO } from './../../../../models/dtos/rental-detail-dto';
import { RentalService } from './../../../../services/rental.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental-detail-list',
  templateUrl: './rental-detail-list.component.html',
  styleUrls: ['./rental-detail-list.component.css']
})
export class RentalDetailListComponent implements OnInit {

  rentalDetailDTOs:RentalDetailDTO[]
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getDetails()
  }

  getDetails(){
    this.rentalService.getDetails().subscribe(response=>{
      this.rentalDetailDTOs=response.data
    })
  }
}
