import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from './services/transaction.service';
import { Transaction } from '../../core/interfaces/transaction.interface';
import { BaseChartDirective, Color, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

    displayedColumns: string[] = ['asset', 'amountCash', 'amountCrypto', 'date', 'current', 'graph'];
    transactions: Transaction[] = [];
    public lineChartType: any = 'line';
    public lineChartData: ChartDataSets[] = [
        { data: [65, 59, 80, 81, 56, 55, 40] },
    ];
    public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions: (ChartOptions) = {
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                display: false,
            }],
            yAxes: [{
                display: false,
            }],
        },
        responsive: false,
    };

    public lineChartColors: Color[] = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        },
    ];


    @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

    constructor(private transactionService: TransactionService) { }

    ngOnInit(): void {

        this.transactionService
            .loadTransactions()
            .subscribe((data) => this.setTransactions(data));
    }

    private setTransactions(transactions) {
        this.transactions = transactions;
        console.log(transactions);
    }

    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
        console.log(event, active);
    }

}
