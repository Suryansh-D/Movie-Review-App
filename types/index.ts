export interface Movie {
  id: string;
  title: string;
  year: number;
  genre: string[];
  poster: string;
  rating: number;
  budget: string;
  collection: string;
  ott: string[];
  releaseDate: string;
  director: string;
  cast: string[];
  synopsis: string;
  anticipation?: number;
}

export interface Review {
  id: string;
  movieId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface TopMovie extends Movie {
  rank: number;
  period: 'month' | 'year';
}
