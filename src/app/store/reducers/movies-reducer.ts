import { createReducer, on } from "@ngrx/store";
import { popularMoviesAction, topMoviesAction } from "../actions/movies-action";
import { IMoviesState } from "../ui/movies.state.interface";

const initialState:IMoviesState ={
 popularMovies: [],
 topMovies:[]
}

export const moviesReducer = createReducer(
    initialState,
    on(popularMoviesAction.loadingPopularMovies, (state=>state)),
    on(popularMoviesAction.popularMoviesLoaded, (state,{movies})=>({...state,popularMovies:movies})),
    on(topMoviesAction.loadingTopMovies,(state=>state)),
    on(topMoviesAction.topMoviesLoaded,(state,{movies})=>({...state,topMovies:movies}))
);
