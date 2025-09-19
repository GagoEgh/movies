import { IMovie } from "../../shared/interfaces/movie.interface";

export interface IMoviesState {
  popularMovies: IMovie[],
  topMovies:IMovie[],
}