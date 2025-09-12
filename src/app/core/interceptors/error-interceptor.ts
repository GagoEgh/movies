import { HttpRequest, HttpHandlerFn, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export const errorInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const snackBar = inject(MatSnackBar);
  return next(req).pipe(
    catchError((error: any) => {
      let errorMessage = 'Произошла неизвестная ошибка';

      if (error.error instanceof ErrorEvent) {
        errorMessage = `Ошибка клиента: ${error.error.message}`;
      } else if (error.status) {
        errorMessage = `Ошибка сервера (${error.status}): ${error.message}`;
      }

      console.error('HTTP Error:', error);

      snackBar.open(errorMessage, 'Закрыть', {
        duration: 5000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });

      return throwError(() => errorMessage);
    })
  );
};
