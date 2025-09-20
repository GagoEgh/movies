import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { finalize, Observable } from "rxjs";
import { inject } from "@angular/core";
import { HttpService } from "../services/http-service";

export const loadingInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
   const httpService = inject(HttpService);
   httpService.loading.set(true);
   return next(req).pipe(finalize(() => httpService.loading.set(false)))
}