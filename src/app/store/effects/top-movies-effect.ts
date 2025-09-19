import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpService } from "../../core/services/http-service";
import { topMoviesAction } from "../actions/movies-action";
import { catchError, EMPTY, map, switchMap } from "rxjs";

@Injectable({providedIn:'root'})
export class TopMoviesEffect{
    private actions$ = inject(Actions);
    private readonly httpService = inject(HttpService)

    popularMovies$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(topMoviesAction.loadingTopMovies),
            switchMap(action =>
                this.httpService.getTopMovies(action.page).pipe(
                    map(movies => topMoviesAction.topMoviesLoaded({ movies })),
                    catchError(err => EMPTY)
                )
            )
        )
    });
}