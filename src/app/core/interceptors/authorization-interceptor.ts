import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

export const authorizationInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    const apiKey = environment.apiKey;
    const modifiedReq = req.clone({
    setHeaders: { Authorization: `Bearer ${apiKey}` }
    });
    return next(modifiedReq);
}