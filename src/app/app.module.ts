import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PilotComponent } from './pilot/pilot.component';
import { CrewComponent } from './crew/crew.component';
import { StewardessesComponent } from './stewardesses/stewardesses.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PilotComponent,
    CrewComponent,
    StewardessesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
