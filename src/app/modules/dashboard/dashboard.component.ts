import { Component, OnInit } from '@angular/core';
import { TransactionService } from './services/transaction.service';
import { Transaction } from '../../core/interfaces/transaction.interface';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

    displayedColumns: string[] = ['asset', 'amountCash', 'amountCrypto', 'date', 'current', 'graph'];
    transactions: Transaction[] = [];

    constructor(private transactionService: TransactionService) { }

    ngOnInit(): void {
        this.transactionService
            .loadTransactions()
            .subscribe((data) => this.setTransactions(data));
    }

    private setTransactions(transactions) {
        this.transactions = transactions;
    }
}
