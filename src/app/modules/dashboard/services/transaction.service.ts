import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../../../core/auth/auth.service';
import { TokenService } from '../../../core/services/token.service';


export interface Transaction {
    id?: string;
    title?: string;
    amount: number;
    date?: string;
}


interface CreateResponse {
    name: string;
}


@Injectable({ providedIn: 'root' })
export class TransactionService {
    private url = 'transactions/';


    constructor(public http: HttpClient,
                public authService: AuthService,
                private tokenService: TokenService,
    ) {

    }

    load() {
        return this.http
            .get(this.url, {
                headers: this.tokenService.getHeader(),
            });
    }

    create(transaction: Transaction): Observable<Transaction> {
        return this.http
            .post<CreateResponse>(`${this.url}/${transaction.date}.json`, transaction)
            .pipe(map(res => {
                return { ...transaction, id: res.name };
            }));
    }

    remove(transaction: Transaction): Observable<void> {
        return this.http
            .delete<void>(`${this.url}/${transaction.date}/${transaction.id}.json`);
    }
}
