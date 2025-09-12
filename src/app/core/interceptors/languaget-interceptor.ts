import { HttpRequest, HttpHandlerFn, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';

export const languageInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  if (req.method === 'GET') {
    const params = req.params.set('language', 'ru-RU');
    const modifiedReq = req.clone({ params });
    return next(modifiedReq);
  }

  return next(req);
};
