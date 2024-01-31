import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { HistoryComponent } from './Pages/history/history.component';
import { LiveComponent } from './Pages/live/live.component';
import { PointTableComponent } from './Pages/point-table/point-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MatchCardComponent } from './Components/match-card/match-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    LiveComponent,
    PointTableComponent,
    MatchCardComponent
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
