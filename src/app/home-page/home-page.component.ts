import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Movie} from "../shared/interfaces";
import {MovieService} from "../shared/movies.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  movies: Movie[] = [];
  mSub: Subscription;
  error: string;
  constructor(
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.mSub = this.movieService.getAll().subscribe(movies => {
      this.movies = movies;
    }, error => {
      this.error = error.message
    })
  }

  ngOnDestroy(){
    if(this.mSub){
      this.mSub.unsubscribe();
    }
  }

}
