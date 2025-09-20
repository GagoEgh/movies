import { createFeatureSelector, createSelector } from "@ngrx/store"
import { IMoviesState } from "../ui/movies.state.interface"

const moviesFeatureSelector = createFeatureSelector<IMoviesState>('movies');
export const selectPopularMovies = createSelector(
  moviesFeatureSelector,
  (state) => state.popularMovies
);

export const selectTopMovies = createSelector(
  moviesFeatureSelector,
  (state)=> state.topMovies
)

export const selectNowMovies = createSelector(
  moviesFeatureSelector,
  (state)=>state.nowMovies
)

export const selectGenre = createSelector(
   moviesFeatureSelector,
   (state)=>state.genre
)

export const selectGenreItem = createSelector(
  moviesFeatureSelector,
  (state)=>state.genreItem
)

export const selectMovieDetail = createSelector(
  moviesFeatureSelector,
  (state)=>state.movieDetail
)

export const selectSearchMovies = createSelector(
  moviesFeatureSelector,
  (state)=>state.searchMovies
)
