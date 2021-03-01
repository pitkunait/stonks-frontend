import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-transaction',
    templateUrl: './transaction.component.html',
    styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {

    @Input() asset: string;
    @Input() amoutCash: string;
    @Input() amoutCrypto: string;

    constructor() { }

    ngOnInit(): void {
    }

}
