import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpService } from "../../core/services/http-service";
import { searchMoviesAction } from "../actions/movies-action";
import { catchError, EMPTY, map, switchMap } from "rxjs";

@Injectable({providedIn:'root'})
export class SearchMoviesEffect{
    private actions$ = inject(Actions);
    private readonly httpService = inject(HttpService)

    searchMovies$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(searchMoviesAction.loadingSearchMovies),
            switchMap((action) =>
                this.httpService.searchMovies(action.query,action.page).pipe(
                    map(movies => searchMoviesAction.searchMoviesLoaded({movies})),
                    catchError(err => EMPTY)
                )
            )
        )
    });
}