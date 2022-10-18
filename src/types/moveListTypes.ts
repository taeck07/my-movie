export interface MovieType {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  bookmark?: boolean;
}

export interface MovieListType {
  search: string;
  movieList: MovieType[];
}

export interface BookmarkMovieListType {
  bookmarkIdList: string[];
}

export interface MovieDetailType extends MovieType {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: any[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
