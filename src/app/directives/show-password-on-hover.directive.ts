import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appShowPasswordOnHover]'
})
export class ShowPasswordOnHoverDirective {
  @Input() appShowPasswordOnHover:string

  constructor(private elementRef:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.elementRef.nativeElement.type="text"
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.elementRef.nativeElement.type="password"
  }
}