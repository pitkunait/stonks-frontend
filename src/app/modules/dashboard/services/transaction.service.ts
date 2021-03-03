import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class TransactionService {
    private url = 'transactions/';

    private yfUrl = 'https://query1.finance.yahoo.com/v7/finance/chart/';

    constructor(private apiService: ApiService, private http: HttpClient) {
        this.loadTransactions();
    }

    loadTransactions(): Observable<any> {
        return this.apiService
            .get(this.url)
            .pipe(
                switchMap((dat: any[]) => forkJoin(dat.map(i => this.getAssetData(i)))),
            );
    }

    getAssetData(asset: any) {
        return this.http
            .get(`${this.yfUrl}${asset.asset}`)
            .pipe(
                map((response: any) => {
                    return {
                        asset: asset.asset,
                        amountCrypto: Number(asset.amount_crypto),
                        amountCash: Number(asset.amount_cash),
                        dateOfTransfer: asset.date_of_transfer,
                        profitLoss: response.chart.result.meta.regularMarketPrice - Number(asset.amount_cash),
                        currentValue: response.chart.result.meta.regularMarketPrice,
                        timeStamp: response.chart.result.timestamp,
                        timeSeries: response.chart.result.indicators.quote.close,
                    };
                }),
            );
    }

}
