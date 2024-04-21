export interface MovieCardProps {
  movie: Movie;
  onPress?: () => void;
}
export interface Movie {
  id: number;
  title: string;
  genres: string;
  image: string;
}
