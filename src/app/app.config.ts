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


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authorizationInterceptor, languageInterceptor, errorInterceptor])),
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),

    // NgRx Store с metaReducers
    // provideStore(, { metaReducers }),
    provideStore(),
    // NgRx Effects
    provideEffects([]),
]
};
