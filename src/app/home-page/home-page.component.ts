import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Movie} from "../shared/interfaces";
import {MovieService} from "../shared/movies.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  movies: Movie[] = [];
  mSub: Subscription;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.mSub = this.movieService.getAll().subscribe(movies => {
      this.movies = movies;
      console.log(movies)
    })
  }

}
