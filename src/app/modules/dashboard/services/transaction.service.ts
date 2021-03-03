import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class TransactionService {
    private url = 'transactions/';

    private yfUrl = 'https://query1.finance.yahoo.com/v8/finance/chart/';

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
        return this.apiService
            .get('yahoo/', { asset: asset.asset })
            .pipe(
                map((response: any) => {

                    const amountCrypto = Number(asset.amount_crypto);
                    const amountCash = Number(asset.amount_cash);
                    const currentValue = response.chart.result[0].meta.regularMarketPrice * amountCrypto;
                    const profitLoss = currentValue - amountCash;
                    const timeSeries = response.chart.result[0].indicators.quote[0].close
                        .filter(i => i).map(i => (i * amountCrypto) - amountCash);

                    return {
                        amountCrypto,
                        amountCash,
                        currentValue,
                        profitLoss,
                        timeSeries,
                        asset: asset.asset,
                        dateOfTransfer: asset.date_of_transfer,
                        timeStamp: response.chart.result[0].timestamp,
                    };
                }),
            );
    }

}
