import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {
  movieGenres = {
    0: 'Action',
    1: 'Adventures',
    2:'Comedy',
    3:'Drama',
    4:'Horror',
    5:'Western'
  };
  transform(number: number){
    return this.movieGenres[number]
  }
}
