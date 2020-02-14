import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {MoviePageComponent} from "./movie-page/movie-page.component";
import {SessionsPageComponent} from "./sessions-page/sessions-page.component";
import {SearchPageComponent} from "./search-page/search-page.component";


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: 'sessions', component: SessionsPageComponent},
      {path: 'movie/:id', component: MoviePageComponent},
      {path: 'search', component: SearchPageComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
