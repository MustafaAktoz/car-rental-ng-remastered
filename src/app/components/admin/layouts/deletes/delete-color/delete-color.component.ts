import { AuthService } from './../../../../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'src/app/models/entities/color';
import { ColorService } from 'src/app/services/color.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-delete-color',
  templateUrl: './delete-color.component.html',
  styleUrls: ['./delete-color.component.css']
})
export class DeleteColorComponent extends AdminChildComponentBaseComponent  implements OnInit {
  @Input() currentColorFromParent:Color

  constructor(private colorService:ColorService, public override authService:AuthService) { 
    super(authService) 
    this.innerHTML = "Sil"
  }

  ngOnInit(): void {
  }

  delete(){
    this.colorService.delete(this.currentColorFromParent)
  }
}
