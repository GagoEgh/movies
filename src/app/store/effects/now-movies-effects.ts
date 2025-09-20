import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpService } from "../../core/services/http-service";
import { nowMoviesAction } from "../actions/movies-action";
import { catchError, EMPTY, map, switchMap } from "rxjs";


@Injectable({providedIn:'root'})
export class NowMoviesEffect{
    private actions$ = inject(Actions);
    private readonly httpService = inject(HttpService);

    nowMovies$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(nowMoviesAction.loadingNewMovies),
            switchMap(action =>
                this.httpService.getCinemaNow(action.page).pipe(
                    map(movies => nowMoviesAction.nowMoviesLoaded({ movies })),
                    catchError(err => EMPTY)
                )
            )
        )
    });

}