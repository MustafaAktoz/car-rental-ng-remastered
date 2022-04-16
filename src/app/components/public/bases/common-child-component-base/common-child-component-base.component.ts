import { AuthService } from '../../../../services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-child-component-base',
  templateUrl: './common-child-component-base.component.html',
  styleUrls: ['./common-child-component-base.component.css']
})
export class CommonChildComponentBaseComponent {
  @Input() classFromParent: string

  constructor(public authService:AuthService){}
}