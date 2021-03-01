import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { SelectorComponent } from './selector/selector.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { TransactionComponent } from './transaction/transaction.component';


@NgModule({
    declarations: [
        DashboardComponent,
        CalendarComponent,
        OrganizerComponent,
        SelectorComponent,
        TransactionComponent,
    ],
    imports: [
        SharedModule,
    ],
})
export class DashboardModule {}

