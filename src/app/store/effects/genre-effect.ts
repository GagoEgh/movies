import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpService } from "../../core/services/http-service";
import { genreMoviesAction } from "../actions/movies-action";
import { catchError, EMPTY, map, switchMap } from "rxjs";

@Injectable({providedIn:'root'})
export class GenreEffect{
    private actions$ = inject(Actions);
    private readonly httpService = inject(HttpService)

    genre$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(genreMoviesAction.loadingGenre),
            switchMap(() =>
                this.httpService.getGenre().pipe(
                    map(genre => genreMoviesAction.genreLoaded({genre})),
                    catchError(err => EMPTY)
                )
            )
        )
    });
}