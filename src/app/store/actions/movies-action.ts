import { createAction, props } from '@ngrx/store';
import { Movies } from '../ui/movies-enum';
import { IMovie } from '../../shared/interfaces/movie.interface';

export const popularMoviesAction = {
    loadingPopularMovies: createAction(Movies.POPULAR_MOVIES_START, props<{page:number}>()),
    popularMoviesLoaded:   createAction(Movies.POPULAR_MOVIES_SUCCESS, props<{movies:IMovie[]}>())
}

export const topMoviesAction = {
    loadingTopMovies: createAction(Movies.TOP_MOVIES_START, props<{page:number}>()),
    topMoviesLoaded: createAction(Movies.TOP_MOVIES_SUCCESS, props<{movies:IMovie[]}>())
}

export const nowMoviesAction = {
    loadingNewMovies: createAction(Movies.NOW_MOVIES_START, props<{page:number}>()),
    nowMoviesLoaded: createAction(Movies.NOW_MOVIES_SUCCESS, props<{movies:IMovie[]}>())
}