import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'src/app/models/entities/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-delete-color',
  templateUrl: './delete-color.component.html',
  styleUrls: ['./delete-color.component.css']
})
export class DeleteColorComponent implements OnInit {
  @Input() currentColorFromParent:Color

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
  }

  delete(){
    this.colorService.delete(this.currentColorFromParent)
  }
}
