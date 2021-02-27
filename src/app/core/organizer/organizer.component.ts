import { Component, OnInit } from '@angular/core';
import { DateService } from '../../shared/services/date.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Transaction, TransactionService } from '../../shared/services/transaction.service';
import { switchMap } from 'rxjs/operators';


@Component({
    selector: 'app-organizer',
    templateUrl: './organizer.component.html',
    styleUrls: ['./organizer.component.scss'],
})
export class OrganizerComponent implements OnInit {

    form: FormGroup;
    transactions: Transaction[] = [];

    constructor(public dateService: DateService,
                public transactionService: TransactionService) { }

    ngOnInit(): void {
        // this.dateService.date
        //     .pipe(
        //         switchMap(value => this.transactionService.load(value)),
        //     )
        //     .subscribe(transactions => {
        //         this.transactions = transactions;
        //     });
        //
        this.form = new FormGroup({
            title: new FormControl('', Validators.required),
            amount: new FormControl(0, [
                Validators.required,
                Validators.min(0.01),
                Validators.pattern('^[0-9]*$'),
            ]),
        });
    }

    submit(): void {
        const { title, amount } = this.form.value;
        const transaction: Transaction = {
            title,
            amount,
            date: this.dateService.date.value.format('DD-MM-YYYY'),
        };
        this.transactionService.create(transaction).subscribe(resp => {
            this.transactions.push(resp);
            this.form.reset();
        }, error => {console.log(error); });
    }

    remove(transaction: Transaction): void {
        this.transactionService.remove(transaction).subscribe(() => {
            this.transactions = this.transactions.filter(t => t.id !== transaction.id);
        }, error => {console.log(error); });
    }

}

