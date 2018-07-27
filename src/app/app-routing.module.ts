import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilotComponent } from './pilot/pilot.component';
import { CrewComponent } from './crew/crew.component';
import { StewardessesComponent } from './stewardesses/stewardesses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TicketComponent } from './ticket/ticket.component';
import { DepartureComponent } from './departure/departure.component';
import { FlightComponent } from './flight/flight.component';
import { AircraftComponent } from './aircraft/aircraft.component';
import { AirtypeComponent } from './airtype/airtype.component';
import { AppComponent } from './app.component';
import { StewardessesDetailComponent } from './stewardesses/stewardesses-detail/stewardesses-detail.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'pilots', component: PilotComponent}, 
  {path: 'stewardesses', component: StewardessesComponent},
  {path: 'stewDetail', component: StewardessesDetailComponent},
  {path: 'crews', component: CrewComponent},
  {path: 'tickets', component: TicketComponent},
  {path: 'departures', component: DepartureComponent},
  {path: 'flights', component: FlightComponent},
  {path: 'aircrafts', component: AircraftComponent},
  {path: 'airtypes', component: AirtypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
