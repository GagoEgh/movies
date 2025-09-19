import { createReducer, on } from "@ngrx/store";
import { IStore } from "../ui/stor.interface";
import { popularMoviesAction } from "../actions/movies-action";

const initialState:IStore = {
    moviesState:{popularMovies: []}
}

export const moviesReducer = createReducer(
    initialState,
    on(popularMoviesAction.loadingPopularMovies, (state=>state)),
    on(popularMoviesAction.popularMoviesLoaded, (state,{movies})=>({...state,popularMovies:movies}))
)