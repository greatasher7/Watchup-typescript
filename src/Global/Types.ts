// Data
export interface IData {
  id: number;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
}

// Props
export interface IRouteProps {
  id: string;
  pathname: string;
}
