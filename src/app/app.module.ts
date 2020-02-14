import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieComponent } from './shared/components/movie/movie.component';
import {HttpClientModule} from "@angular/common/http";
import { MoviePageComponent } from './movie-page/movie-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GenrePipe} from "./shared/genre.pipe";
import { SessionComponent } from './shared/components/session/session.component';
import { PlaceComponent } from './shared/components/session/place/place.component';
import { SessionsPageComponent } from './sessions-page/sessions-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    MovieComponent,
    MoviePageComponent,
    GenrePipe,
    SessionComponent,
    PlaceComponent,
    SessionsPageComponent,
    SearchPageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
