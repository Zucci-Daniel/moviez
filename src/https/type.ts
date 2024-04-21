export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface SearchMoviesResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
  Error?: string;
}
