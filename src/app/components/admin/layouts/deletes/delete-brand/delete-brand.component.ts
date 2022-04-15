import { Component, Input, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/entities/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-delete-brand',
  templateUrl: './delete-brand.component.html',
  styleUrls: ['./delete-brand.component.css']
})
export class DeleteBrandComponent implements OnInit {
  @Input() currentBrandFromParent:Brand

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
  }

  delete(){
    this.brandService.delete(this.currentBrandFromParent)
  }
}
