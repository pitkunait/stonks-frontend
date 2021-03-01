import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    private prefix = 'http://0.0.0.0:8000/api';

    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const apiReq = request.clone({ url: `${this.prefix}/${request.url}` });
        return next.handle(apiReq);
    }
}
