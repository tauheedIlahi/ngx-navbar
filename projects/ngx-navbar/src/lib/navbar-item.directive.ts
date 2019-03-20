import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ngxNavbarItem]'
})
export class NavbarItemDirective {

  constructor(elRef: ElementRef<HTMLElement>) {
    const el = elRef.nativeElement;
    el.style.writingMode = 'vertical-lr';
    el.style.display = 'block';
    el.style.margin = '7px 50%';
    el.style.transform = 'translateX(-50%)';
    el.style.whiteSpace = 'nowrap';
  }

}
