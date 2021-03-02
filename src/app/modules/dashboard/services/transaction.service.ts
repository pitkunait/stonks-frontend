import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Transaction } from '../../../core/interfaces/transaction.interface';
import { ApiService } from '../../../core/services/api.service';


@Injectable({ providedIn: 'root' })
export class TransactionService {
    private url = 'transactions/';

    constructor(public apiService: ApiService) {
        this.loadTransactions();
    }

    loadTransactions(): Observable<any> {
        return this.apiService
            .get(this.url)
            .pipe(
                map(this.mapTransactions),
            );
    }

    mapTransactions(response: any[]): Transaction[] {
        return response.map(i => ({
            asset: i.asset,
            amountCrypto: Number(i.amount_crypto),
            amountCash: Number(i.amount_cash),
            dateOfTransfer: i.date_of_transfer,
            currentValue: i.current_value ? Number(i.current_value) : 0,
        }));
    }
}
