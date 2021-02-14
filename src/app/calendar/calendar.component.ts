import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


interface Day {
    value: moment.Moment;
    active: boolean;
    disabled: boolean;
    selected: boolean;
}


interface Week {
    days: Day[];
}


@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {

    calendar: Week[];

    constructor() { }

    ngOnInit(): void {
    }

}
