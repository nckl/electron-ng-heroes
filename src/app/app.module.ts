import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import {Title} from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroService} from './services/hero.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AppRoutingModule }     from './app-routing.module';
import {HeroSearchComponent} from './hero-search/hero-search.component';

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  AppRoutingModule,
                  HttpModule,
                  InMemoryWebApiModule.forRoot(InMemoryDataService), ],
  declarations: [ AppComponent,
  HeroDetailComponent,
  HeroesComponent,
  DashboardComponent,
  HeroSearchComponent ],
  providers: [HeroService, Title],
  bootstrap:    [AppComponent ]
})
export class AppModule { }
