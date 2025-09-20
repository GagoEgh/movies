import { createAction, props } from '@ngrx/store';
import { Movies } from '../ui/movies-enum';
import { IMovie } from '../../shared/interfaces/movie.interface';
import { IGener } from '../../shared/interfaces/gener.interface';

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

export const genreMoviesAction = {
    loadingGenre: createAction(Movies.GENRE_MOVIES_START),
    genreLoaded: createAction(Movies.GENRE_MOVIES_SUCCESS,props<{genre:IGener[]}>())
}

export const genreItemMoviesAction = {
    loadingGenreItem:createAction(Movies.GENRE_ITEM_MOVIES_START,props<{genersId:string,page:number}>()),
    genreItemLoaded:createAction(Movies.GENRE_ITEM_MOVIES_SUCCESS,props<{movies:IMovie[]}>())
}