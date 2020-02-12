import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "./interfaces";
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class MovieService {
  // enum MovieGenres{};
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
}
