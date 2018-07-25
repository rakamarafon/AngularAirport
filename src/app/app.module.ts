import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PilotComponent } from './pilot/pilot.component';
import { CrewComponent } from './crew/crew.component';
import { StewardessesComponent } from './stewardesses/stewardesses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TicketComponent } from './ticket/ticket.component';
import { DepartureComponent } from './departure/departure.component';
import { FlightComponent } from './flight/flight.component';
import { AircraftComponent } from './aircraft/aircraft.component';
import { AirtypeComponent } from './airtype/airtype.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PilotComponent,
    CrewComponent,
    StewardessesComponent,
    NotFoundComponent,
    TicketComponent,
    DepartureComponent,
    FlightComponent,
    AircraftComponent,
    AirtypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
