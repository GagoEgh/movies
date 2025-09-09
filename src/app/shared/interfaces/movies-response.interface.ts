import { IMovie } from "./movie.interface";

export interface MoviesResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
  dates?: Dates; 
}

export interface Dates {
  maximum: string;
  minimum: string;
}
