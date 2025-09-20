import { IGener } from "../../shared/interfaces/gener.interface";
import { IMovieDetails } from "../../shared/interfaces/movie-details.interface";
import { IMovie } from "../../shared/interfaces/movie.interface";

export interface IMoviesState {
  popularMovies: IMovie[],
  topMovies:IMovie[],
  nowMovies:IMovie[],
  genre:IGener[],
  genreItem:IMovie[],
  movieDetail:IMovieDetails|null
}