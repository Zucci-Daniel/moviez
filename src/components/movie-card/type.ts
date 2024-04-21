export interface MovieCardProps {
  movie: Movie;
  onPress?: () => void;
}
export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
