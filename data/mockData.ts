import { Movie, Review } from '../types';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    year: 2010,
    genre: ['Sci-Fi', 'Thriller'],
    poster: 'https://via.placeholder.com/300x450/1a1a2e/ffffff?text=Inception',
    rating: 8.8,
    budget: '$160 million',
    collection: '$829 million',
    ott: ['Netflix', 'Prime Video'],
    releaseDate: '2010-07-16',
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Ellen Page', 'Tom Hardy'],
    synopsis: 'A thief who steals corporate secrets through dream-sharing technology.',
    anticipation: 95
  },
  {
    id: '2',
    title: 'The Dark Knight',
    year: 2008,
    genre: ['Action', 'Crime', 'Drama'],
    poster: 'https://via.placeholder.com/300x450/1a1a2e/ffffff?text=The+Dark+Knight',
    rating: 9.0,
    budget: '$185 million',
    collection: '$1.005 billion',
    ott: ['HBO Max', 'Prime Video'],
    releaseDate: '2008-07-18',
    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    synopsis: 'Batman faces the Joker in a battle for Gotham\'s soul.',
    anticipation: 98
  },
  {
    id: '3',
    title: 'Interstellar',
    year: 2014,
    genre: ['Sci-Fi', 'Drama'],
    poster: 'https://via.placeholder.com/300x450/1a1a2e/ffffff?text=Interstellar',
    rating: 8.6,
    budget: '$165 million',
    collection: '$677 million',
    ott: ['Netflix', 'Paramount+'],
    releaseDate: '2014-11-07',
    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    synopsis: 'Explorers travel through a wormhole in space to save humanity.',
    anticipation: 92
  },
  {
    id: '4',
    title: 'The Shawshank Redemption',
    year: 1994,
    genre: ['Drama'],
    poster: 'https://via.placeholder.com/300x450/1a1a2e/ffffff?text=Shawshank',
    rating: 9.3,
    budget: '$25 million',
    collection: '$58.3 million',
    ott: ['Netflix', 'Prime Video'],
    releaseDate: '1994-09-23',
    director: 'Frank Darabont',
    cast: ['Tim Robbins', 'Morgan Freeman'],
    synopsis: 'Two imprisoned men bond over years, finding redemption.',
    anticipation: 89
  },
  {
    id: '5',
    title: 'Pulp Fiction',
    year: 1994,
    genre: ['Crime', 'Drama'],
    poster: 'https://via.placeholder.com/300x450/1a1a2e/ffffff?text=Pulp+Fiction',
    rating: 8.9,
    budget: '$8 million',
    collection: '$213 million',
    ott: ['Netflix', 'Prime Video'],
    releaseDate: '1994-10-14',
    director: 'Quentin Tarantino',
    cast: ['John Travolta', 'Samuel L. Jackson', 'Uma Thurman'],
    synopsis: 'Interwoven stories of crime and redemption in Los Angeles.',
    anticipation: 87
  },
  {
    id: '6',
    title: 'The Matrix',
    year: 1999,
    genre: ['Sci-Fi', 'Action'],
    poster: 'https://via.placeholder.com/300x450/1a1a2e/ffffff?text=The+Matrix',
    rating: 8.7,
    budget: '$63 million',
    collection: '$466 million',
    ott: ['HBO Max', 'Prime Video'],
    releaseDate: '1999-03-31',
    director: 'Wachowski Brothers',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    synopsis: 'A hacker discovers reality is a computer simulation.',
    anticipation: 93
  },
  {
    id: '7',
    title: 'Forrest Gump',
    year: 1994,
    genre: ['Drama', 'Romance'],
    poster: 'https://via.placeholder.com/300x450/1a1a2e/ffffff?text=Forrest+Gump',
    rating: 8.8,
    budget: '$55 million',
    collection: '$678 million',
    ott: ['Paramount+', 'Prime Video'],
    releaseDate: '1994-07-06',
    director: 'Robert Zemeckis',
    cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
    synopsis: 'Life story of a simple man who witnesses historic events.',
    anticipation: 85
  },
  {
    id: '8',
    title: 'Fight Club',
    year: 1999,
    genre: ['Drama', 'Thriller'],
    poster: 'https://via.placeholder.com/300x450/1a1a2e/ffffff?text=Fight+Club',
    rating: 8.8,
    budget: '$63 million',
    collection: '$101 million',
    ott: ['Hulu', 'Prime Video'],
    releaseDate: '1999-10-15',
    director: 'David Fincher',
    cast: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'],
    synopsis: 'An insomniac and a soap salesman form an underground fight club.',
    anticipation: 91
  },
  {
    id: '9',
    title: 'The Godfather',
    year: 1972,
    genre: ['Crime', 'Drama'],
    poster: 'https://via.placeholder.com/300x450/1a1a2e/ffffff?text=The+Godfather',
    rating: 9.2,
    budget: '$6 million',
    collection: '$246 million',
    ott: ['Paramount+', 'Prime Video'],
    releaseDate: '1972-03-24',
    director: 'Francis Ford Coppola',
    cast: ['Marlon Brando', 'Al Pacino', 'James Caan'],
    synopsis: 'The aging patriarch of a crime dynasty transfers power.',
    anticipation: 88
  },
  {
    id: '10',
    title: 'Gladiator',
    year: 2000,
    genre: ['Action', 'Drama'],
    poster: 'https://via.placeholder.com/300x450/1a1a2e/ffffff?text=Gladiator',
    rating: 8.5,
    budget: '$103 million',
    collection: '$460 million',
    ott: ['Paramount+', 'Prime Video'],
    releaseDate: '2000-05-05',
    director: 'Ridley Scott',
    cast: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'],
    synopsis: 'A former general seeks revenge against the corrupt emperor.',
    anticipation: 84
  }
];

export const reviews: Review[] = [
  {
    id: 'r1',
    movieId: '1',
    userName: 'MovieBuff42',
    rating: 9,
    comment: 'Mind-bending masterpiece! The layered dream sequences are brilliant.',
    date: '2024-01-15'
  },
  {
    id: 'r2',
    movieId: '1',
    userName: 'CinemaLover',
    rating: 8.5,
    comment: 'Incredible visuals and concept. A must-watch!',
    date: '2024-01-10'
  },
  {
    id: 'r3',
    movieId: '2',
    userName: 'DarkKnightFan',
    rating: 10,
    comment: 'Heath Ledger\'s Joker is legendary. Perfect superhero film.',
    date: '2024-01-12'
  },
  {
    id: 'r4',
    movieId: '3',
    userName: 'SciFiGeek',
    rating: 9,
    comment: 'Emotionally powerful and scientifically fascinating.',
    date: '2024-01-14'
  },
  {
    id: 'r5',
    movieId: '4',
    userName: 'ClassicFilmFan',
    rating: 10,
    comment: 'The greatest film ever made. Timeless and powerful.',
    date: '2024-01-11'
  }
];

// Function to get reviews for a specific movie
export const getReviewsForMovie = (movieId: string): Review[] => {
  return reviews.filter(review => review.movieId === movieId);
};

// Function to add a new review
export const addReview = (review: Review): void => {
  reviews.push(review);
};

// Function to get top movies of the month
export const getTopMoviesOfMonth = (): Movie[] => {
  return [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);
};

// Function to get top movies of the year
export const getTopMoviesOfYear = (): Movie[] => {
  return [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);
};

// Function to get most anticipated movies
export const getMostAnticipatedMovies = (): Movie[] => {
  return [...movies]
    .sort((a, b) => (b.anticipation || 0) - (a.anticipation || 0))
    .slice(0, 10);
};
