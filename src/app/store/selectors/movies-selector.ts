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