import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {



  @HostBinding('style.backgroundColor') color:any;
  @HostBinding('style.Color') changeStyle:any;

  constructor() { }

  @HostListener('mouseenter')mouseenter(){
    this.color='red'
  }
  @HostListener('mouseleave')mouseleave(){
    this.color='blue'
  }

  @HostListener('keyup')keyup(){
    this.changeStyle='yellow'
  }

}
