import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookingComponent } from './booking/booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ReportComponent } from './report/report.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalTestComponent } from './modal-test/modal-test.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    DropdownComponent,
    ReportComponent,
    ModalTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
