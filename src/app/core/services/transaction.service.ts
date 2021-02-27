import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


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
    private url = 'http://192.168.150.72:8000/api/transactions/';


    constructor(public http: HttpClient, public authService: AuthService) {

    }

    load() {
        return this.http
            .get(this.url, {
                headers: {
                    Authorization: `Bearer ${this.authService.access}`,
                },
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
