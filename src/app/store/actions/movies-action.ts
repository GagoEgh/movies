import { createAction, props } from '@ngrx/store';
import { PopularMovies } from '../ui/movies-enum';
import { IMovie } from '../../shared/interfaces/movie.interface';

export const popularMoviesAction ={
    loadingPopularMovies: createAction(PopularMovies.POPULAR_MOVIES_START, props<{page:number}>()),
    popularMoviesLoaded:   createAction(PopularMovies.POPULAR_MOVIES_SUCCESS, props<{movies:IMovie[]}>())
}