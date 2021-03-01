import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
})
export class ApiService {

    private apiUrl = `${environment.baseUrl}:${environment.port}/api/`;

    constructor(
        private http: HttpClient,
    ) {}

    formatErrors(error: any) {
        return throwError(error.error);
    }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${this.apiUrl}${path}`, { params })
            .pipe(catchError(this.formatErrors));
    }

    put(path: string, body: object = {}): Observable<any> {
        return this.http.put(
            `${this.apiUrl}${path}`,
            JSON.stringify(body),
        ).pipe(catchError(this.formatErrors));
    }

    post(path: string, body: object = {}): Observable<any> {
        return this.http.post(
            `${this.apiUrl}${path}`,
            JSON.stringify(body),
        ).pipe(catchError(this.formatErrors));
    }

    delete(path): Observable<any> {
        return this.http.delete(
            `${this.apiUrl}${path}`,
        ).pipe(catchError(this.formatErrors));
    }
}
