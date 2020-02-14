import { Component, OnInit } from '@angular/core';
import {HttpParams} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../shared/movies.service";
import {Movie} from "../shared/interfaces";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }
  movies: Movie[];
  isResult: boolean = false;
  ngOnInit() {
    this.route.queryParams
      .subscribe(searchParams =>{
        this.isResult = false;
        if(searchParams.name){
          let params = new HttpParams();
          params = params.set('name', searchParams.name);
          this.movieService.search(params).
          subscribe((movies: Movie[]) => {
            this.movies = movies;
            if(Object.keys(this.movies).length) {
              this.isResult = true
            }
          })
        }
      })
  }

}
