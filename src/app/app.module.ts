import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { MothershipComponent } from './mothership/mothership.component';
import { SkyComponent } from './sky/sky.component';
import { CityComponent } from './city/city.component';
import { EnergyTrackComponent } from './energy-track/energy-track.component';
import { LifeTrackComponent } from './life-track/life-track.component';
import { ResearchTrackComponent } from './research-track/research-track.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    MothershipComponent,
    SkyComponent,
    CityComponent,
    EnergyTrackComponent,
    LifeTrackComponent,
    ResearchTrackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
