import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookingComponent } from './booking/booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    DropdownComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
