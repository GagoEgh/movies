import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HttpService } from "../../core/services/http-service";
import { genreItemMoviesAction, genreMoviesAction } from "../actions/movies-action";
import { catchError, EMPTY, map, switchMap } from "rxjs";

@Injectable({providedIn:'root'})
export class GenreItemEffect{
    private actions$ = inject(Actions);
    private readonly httpService = inject(HttpService)

    genreItem$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(genreItemMoviesAction.loadingGenreItem),
            switchMap((action) =>
                this.httpService.getWithGeners(action.genersId,action.page).pipe(
                    map(movies => genreItemMoviesAction.genreItemLoaded({movies})),
                    catchError(err => EMPTY)
                )
            )
        )
    });
}