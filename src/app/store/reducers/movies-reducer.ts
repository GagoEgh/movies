import { createReducer, on } from "@ngrx/store";
import { genreItemMoviesAction, genreMoviesAction, movieDetailAction, nowMoviesAction, popularMoviesAction, searchMoviesAction, topMoviesAction } from "../actions/movies-action";
import { IMoviesState } from "../ui/movies.state.interface";

const initialState:IMoviesState ={
 popularMovies: [],
 topMovies:[],
 nowMovies:[],
 genre:[],
 genreItem:[],
 movieDetail:null,
 searchMovies:[]
}

export const moviesReducer = createReducer(
    initialState,
    on(popularMoviesAction.loadingPopularMovies, (state=>state)),
    on(popularMoviesAction.popularMoviesLoaded, (state,{movies})=>({...state,popularMovies:movies})),
    on(topMoviesAction.loadingTopMovies,(state=>state)),
    on(topMoviesAction.topMoviesLoaded,(state,{movies})=>({...state,topMovies:movies})),
    on(nowMoviesAction.loadingNewMovies,(state=>state)),
    on(nowMoviesAction.nowMoviesLoaded,(state,{movies})=>({...state,nowMovies:movies})),
    on(genreMoviesAction.loadingGenre,(state=>state)),
    on(genreMoviesAction.genreLoaded,(state,{genre})=>({...state,genre})),
    on(genreItemMoviesAction.loadingGenreItem,(state=>state)),
    on(genreItemMoviesAction.genreItemLoaded,(state,{movies})=>({...state,genreItem:movies})),
    on(movieDetailAction.loadingMovieDetail,(state)=>state),
    on(movieDetailAction.movieDetailLoaded,(state,{movieDetail})=>({...state,movieDetail:movieDetail})),
    on(movieDetailAction.movieDetailDelete,(state)=>({...state,movieDetail:null})),
    on(searchMoviesAction.loadingSearchMovies,(state=>state)),
    on(searchMoviesAction.searchMoviesLoaded,(state,{movies})=>({...state,searchMovies:movies})),
    on(searchMoviesAction.searchMoviesCleare,(state)=>({...state,searchMovies:[]}))
);
