import { Component, OnInit } from '@angular/core';
import { TransactionService } from './services/transaction.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {


    public transactions: any = [];

    constructor(private transactionService: TransactionService) { }

    ngOnInit(): void {
        this.transactionService
            .loadTransactions()
            .subscribe(this.setTransactions);

    }

    private setTransactions(transactions) {
        this.transactions = transactions;
        console.log(this.transactions);
    }
}
