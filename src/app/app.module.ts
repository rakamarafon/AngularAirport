import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

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
import { StewardessesDetailComponent } from './stewardesses/stewardesses-detail/stewardesses-detail.component';
import { StewardessesService } from './services/stewardesses.service';
import { PilotService } from './services/pilot.service';

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
    AirtypeComponent,
    StewardessesDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StewardessesService, PilotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
