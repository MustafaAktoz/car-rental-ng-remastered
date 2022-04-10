import { RouterService } from 'src/app/services/router.service';
import { Color } from '../../../../models/entities/color';
import { ColorService } from '../../../../services/color.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color-select-option-car-filter',
  templateUrl: './color-select-option-car-filter.component.html',
  styleUrls: ['./color-select-option-car-filter.component.css']
})
export class ColorSelectOptionCarFilterComponent implements OnInit {

  colors:Color[]
  currentColorId:number
  constructor(private colorService:ColorService, private routerService:RouterService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll();

    this.activatedRoute.params.subscribe(params=>{
      this.currentColorId=params["colorId"]
    })
  }

  getAll(){
    this.colorService.getAll().subscribe(response=>{
      this.colors=response.data
    })
  }

  routeToCarDetailsByColorId(){
    this.routerService.carDetailsByColorId(this.currentColorId)
  }
}
