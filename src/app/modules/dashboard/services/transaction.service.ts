import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Transaction } from '../../../core/interfaces/transaction.interface';


@Injectable({ providedIn: 'root' })
export class TransactionService {
    private url = 'http://0.0.0.0:8000/api/transactions/';

    constructor(public http: HttpClient) {
        this.loadTransactions();
    }

    loadTransactions(): Observable<any> {
        return this.http
            .get(this.url)
            .pipe(
                map(this.mapTransactions)
            );
    }

    mapTransactions(response: any[]): Transaction[] {
        return response.map(i => ({
            asset: i.asset,
            amountCrypto: Number(i.amount_crypto),
            amountCash: Number(i.amount_cash),
            dateOfTransfer: i.date_of_transfer,
        }));
    }
}
