import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Session} from "./interfaces";
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class SessionService {
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Session[]>{
    return this.http.get(`https://cinema-api-test.herokuapp.com/movieShows`)
      .pipe(map((response: {[key: string]: any}) => {
        return Object.keys(response)
          .map((key) => ({
            ...response[key],
            startTime: new Date(response[key].startTime),
            date: new Date(response[key].date),
          }));
      }))
  }

  getByMovieId(id: string): Observable<Session> {
    return this.http.get(`https://cinema-api-test.herokuapp.com/movieShows?movie_id=${id}`)
      .pipe(map((session: Session) => {
        return {
          ...session,
          startTime: new Date(session.startTime),
          date: new Date(session.date),
        }
      }))
  }
  pay(params): Observable<any>{
    return  this.http.post('https://cinema-api-test.herokuapp.com/bookingPlace', params)
  }

}
