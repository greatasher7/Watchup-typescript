// Movie Data & Related
export interface IMovie {
  title: string;
  release_date: string;
  id: number;
  poster_path?: string;
  vote_average: number;
}

export interface IMovieDetail extends IMovie {
  runtime: number;
  backdrop_path?: string;
  production_countries: { name: string }[];
  genre: { name: string }[];
  overview: string;
}

// Show Data & Related
export interface IShow {
  name: string;
  first_air_date: string;
  id: number;
  poster_path?: string;
  vote_average: number;
}

export interface IShowDetail extends IShow {
  seasons: { episode_count: number }[];
  backdrop_path?: string;
  production_countries: { name: string }[];
  genre: { name: string }[];
  overview: string;
}

// Credit Data
export interface ICredit {
  id: number;
  profile_path?: string;
  name: string;
  charactor: string;
}

// Review Data
export interface IReview {
  author: string;
  id: string;
  updated_at: string;
  content: string;
  author_details: { avatar_path: string };
}

// Props
export interface IRouteProps {
  id: string;
  pathname: string;
}
