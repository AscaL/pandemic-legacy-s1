import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { PandemicGameComponent } from './components/pandemic-game/pandemic-game.component';
import { MatSliderModule } from '@angular/material/slider';
import { EpidemicCounterComponent } from './components/epidemic-counter/epidemic-counter.component';
import { DeckStatsComponent } from './components/deck-stats/deck-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesListComponent,
    PandemicGameComponent,
    EpidemicCounterComponent,
    DeckStatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatListModule,
    MatSliderModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
