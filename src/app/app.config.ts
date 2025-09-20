import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { errorInterceptor } from './core/interceptors/error-interceptor';
import { authorizationInterceptor } from './core/interceptors/authorization-interceptor';
import { languageInterceptor } from './core/interceptors/languaget-interceptor';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { metaReducers } from './store/helpers/actions-logger';
import { loadingInterceptor } from './core/interceptors/loading-interceptor';
import { moviesReducer } from './store/reducers/movies-reducer';
import { PopularMoviesEffect } from './store/effects/popular-movies-effect';
import { TopMoviesEffect } from './store/effects/top-movies-effect';
import { NowMoviesEffect } from './store/effects/now-movies-effects';
import { GenreEffect } from './store/effects/genre-effect';
import { GenreItemEffect } from './store/effects/genre-item-effect';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authorizationInterceptor, languageInterceptor, errorInterceptor, loadingInterceptor])),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideStore({ movies: moviesReducer }, { metaReducers }),
    provideEffects([PopularMoviesEffect,TopMoviesEffect,NowMoviesEffect,GenreEffect,GenreItemEffect]),
]
};
