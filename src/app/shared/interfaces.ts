export interface Movie {
  genre_id: number[],
  _id: string,
  description: string,
  name: string,
  dateOfRelease: Date,
  pictureLink: string,
}
export interface Place {
  id: string,
  position: number,
  isFree: boolean,
}
export interface Session {
  places: [Place[]],
  _id: string,
  movie_id: string,
  movie?: Movie
  ticketPrice: number,
  startTime: Date,
  date: Date,
}
export interface BookTicket {
  movieShow_id : string,
  row_id : number,
  place_position : number,
  isFree : boolean

}
