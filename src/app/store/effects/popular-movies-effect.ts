import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpService } from "../../core/services/http-service";
import { catchError, EMPTY, map, switchMap, tap } from "rxjs";
import { popularMoviesAction } from "../actions/movies-action";


@Injectable({ providedIn: 'root' })
export class PopularMoviesEffect{

    private actions$ = inject(Actions);
    private readonly httpService = inject(HttpService)

    popularMovies$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(popularMoviesAction.loadingPopularMovies),
            switchMap(action =>
                this.httpService.getPopularMovies(action.page).pipe(
                    map(movies => popularMoviesAction.popularMoviesLoaded({ movies })),
                    catchError(err => EMPTY)
                )
            )
        )
    });

}