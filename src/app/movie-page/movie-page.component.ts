import { Component, OnInit } from '@angular/core';
import {MovieService} from "../shared/movies.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Observable} from "rxjs";
import {Movie, Session,} from "../shared/interfaces";
import {switchMap} from "rxjs/operators";
import {SessionService} from "../shared/session.service";

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
  movie$: Observable<Movie>;
  sessions$: Observable<Session>;
  defaultImg: string = ' ';
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    this.movie$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.movieService.getById(params['id'])
      }));
    this.sessions$ = this.route.params
      .pipe(switchMap((params: Params) => {
        return this.sessionService.getByMovieId(params['id'])
      }));

  }

}
