import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../shared/services/transaction.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    constructor(private transactionService: TransactionService) { }

    ngOnInit(): void {
        this.transactionService.load().subscribe((res) => {

            console.log(res);



        });
    }

}
