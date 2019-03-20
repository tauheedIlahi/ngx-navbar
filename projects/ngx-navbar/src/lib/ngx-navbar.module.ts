import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { NavbarItemDirective } from './navbar-item.directive';

@NgModule({
  declarations: [NavbarComponent, NavbarItemDirective],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent, NavbarItemDirective]
})
export class NgxNavbarModule { }
