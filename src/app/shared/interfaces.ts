export interface Movie {
  genre_id: number[];
  _id: string;
  description: string;
  name: string;
  dateOfRelease: Date;
  pictureLink: string;
}
export enum MovieGenres{
  Action,
  Adventures,
  Comedy,
  Drama,
  Horror,
  Western
}
