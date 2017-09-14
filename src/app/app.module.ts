import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CompetitionDetailComponent } from './competition-detail.component';
import { StandingsDetailComponent } from './standings-detail.component';
import { PageNotFoundComponent } from './pageNotFound.component';

import { StandingsDetailService } from './standings-detail.service';
import { CompetitionDetailService } from './competition-detail.service';

@NgModule({
  declarations: [
    AppComponent, CompetitionDetailComponent, StandingsDetailComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule, HttpModule, AppRoutingModule
  ],
  providers: [CompetitionDetailService, StandingsDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
