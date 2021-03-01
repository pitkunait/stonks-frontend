import { Component, OnInit } from '@angular/core';
import { TransactionService } from './services/transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


    public assets: any = [];

    constructor(private transactionService: TransactionService) { }

    ngOnInit(): void {
        this.transactionService.load().subscribe((res) => {
            this.assets = res;

        });
    }
}
