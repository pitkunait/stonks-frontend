import { Component, OnInit } from '@angular/core';
import { TransactionService } from './services/transaction.service';
import { Transaction } from '../../core/interfaces/transaction.interface';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

    displayedColumns: string[] = ['asset', 'amountCash', 'amountCrypto', 'date', 'current', 'profitloss', 'graph'];
    transactions: Transaction[] = [];
    totalInvested = 0;
    totalCurrentValue = 0;
    lossProfit = 0;

    constructor(private transactionService: TransactionService) { }

    ngOnInit(): void {
        this.transactionService
            .loadTransactions()
            .subscribe((response: Transaction[]) => this.setTransactions(response));
    }

    private setTransactions(transactions: Transaction[]) {
        if (transactions) {
            this.transactions = transactions;
            transactions.forEach((i) => {
                    this.totalInvested += i.amountCash;
                    this.totalCurrentValue += i.currentValue;
                    this.lossProfit += i.currentValue - i.amountCash;
                },
            );
        }
    }
}

