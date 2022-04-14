import { Brand } from 'src/app/models/entities/brand';
import { BrandService } from '../../../../../services/brand.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  filterText:string
  brands:Brand[]
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.brandService.getAll().subscribe(response=>{
      this.brands=response.data
    })
  }
}
