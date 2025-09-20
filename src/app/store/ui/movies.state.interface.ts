import { IGener } from "../../shared/interfaces/gener.interface";
import { IMovie } from "../../shared/interfaces/movie.interface";

export interface IMoviesState {
  popularMovies: IMovie[],
  topMovies:IMovie[],
  nowMovies:IMovie[],
  genre:IGener[],
  genreItem:IMovie[],
}