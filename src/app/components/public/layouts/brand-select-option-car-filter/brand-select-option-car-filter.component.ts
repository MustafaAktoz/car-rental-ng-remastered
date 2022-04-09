import { RouterService } from 'src/app/services/router.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/entities/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-select-option-car-filter',
  templateUrl: './brand-select-option-car-filter.component.html',
  styleUrls: ['./brand-select-option-car-filter.component.css']
})
export class BrandSelectOptionCarFilterComponent implements OnInit {

  brands: Brand[]
  currentBrandId: number
  constructor(private brandService: BrandService, private routerService: RouterService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll()

    this.activatedRoute.params.subscribe(params => {
      this.currentBrandId = params["brandId"]
    })
  }

  getAll() {
    this.brandService.getAll().subscribe(response => {
      this.brands = response.data
    })
  }

  routeToCarDetailsByBrandId() {
    this.routerService.routeToCarDetailsByBrandId(this.currentBrandId)
  }
}
