import { Component, Input, OnInit } from '@angular/core';
import { nanoid } from 'nanoid';


@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {

    id: string = nanoid(6);
    @Input() data: any[];

    constructor() { }

    ngOnInit(): void {

    }


}
