import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxNavbarModule } from 'projects/ngx-navbar/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
