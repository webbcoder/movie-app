import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "./interfaces";
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class MovieService {
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<Movie[]>{
    return this.http.get(`https://cinema-api-test.herokuapp.com/movies`)
      .pipe(map((response: {[key: string]: any}) => {
        return Object.keys(response)
          .map((key) => ({
            ...response[key],
            dateOfRelease: new Date(response[key].dateOfRelease)
          }));
      }))
  }
  getById(id: string): Observable<Movie> {
    return this.http.get(`https://cinema-api-test.herokuapp.com/movies?movie_id=${id}`)
      .pipe(map((movie: Movie) => {
        return {
          ...movie,
          dateOfRelease: new Date(movie.dateOfRelease)
        }
      }))
  }

  search(params: HttpParams): Observable<Movie[]> {
    return  this.http.get<Movie[]>('https://cinema-api-test.herokuapp.com/movies/find',{
      params,
      observe: "response"
    })
      .pipe(map((response) => {
        return response.body
      }))
  }

}
