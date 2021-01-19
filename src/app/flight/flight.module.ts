import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { FlightRoutingModule } from './flight-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TicketbookingComponent],
  imports: [
    CommonModule,
    FlightRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbPaginationModule, NgbAlertModule,
    NgbDatepickerModule
  ]
})
export class FlightModule { }
