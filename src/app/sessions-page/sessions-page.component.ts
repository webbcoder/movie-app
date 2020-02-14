import {Component, OnDestroy, OnInit} from '@angular/core';
import {SessionService} from "../shared/session.service";
import {Session} from "../shared/interfaces";
import {Subscription, throwError} from "rxjs";
import {MovieService} from "../shared/movies.service";
import {catchError, delay, map} from "rxjs/operators";

@Component({
  selector: 'app-sessions-page',
  templateUrl: './sessions-page.component.html',
  styleUrls: ['./sessions-page.component.scss']
})
export class SessionsPageComponent implements OnInit, OnDestroy {
  sessions: Session[] = [];
  sSub: Subscription;
  loading: boolean = false;
  defaultImg: string= ' ';
  error = '';
  constructor(
    private sessionService: SessionService,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.sSub = this.sessionService.getAll()
      .pipe(
        map((sessions: Session[]) =>{
          sessions.map(session=>{
            this.movieService.getById(session.movie_id).subscribe(movie=>{
              session.movie = movie
            })
          });
          return sessions;
        }),
        delay(500),
        catchError((err) => {
          return throwError(err)
        })
      )
      .subscribe(sessions => {
        this.sessions = sessions;
        this.loading = false;
    }, error => {
        this.error = error.message;
    });

  }

  ngOnDestroy(){
    if(this.sSub){
      this.sSub.unsubscribe();
    }
  }

}
