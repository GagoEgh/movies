import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpService } from "../../core/services/http-service";
import { movieDetailAction } from "../actions/movies-action";
import { catchError, EMPTY, map, switchMap } from "rxjs";

@Injectable({providedIn:'root'})
export class MovieDetailEffect{
    private actions$ = inject(Actions);
    private readonly httpService = inject(HttpService)

    movieDetail$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(movieDetailAction.loadingMovieDetail),
            switchMap((action) =>
                this.httpService.getMovieDetails(action.id).pipe(
                    map(movieDetail => movieDetailAction.movieDetailLoaded({movieDetail})),
                    catchError(err => EMPTY)
                )
            )
        )
    });
}