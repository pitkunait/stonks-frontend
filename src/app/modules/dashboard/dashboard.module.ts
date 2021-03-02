import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { SelectorComponent } from './selector/selector.component';
import { SharedModule } from '../../shared/shared.module';
import { TransactionComponent } from './transaction/transaction.component';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard.routes';


@NgModule({
    declarations: [
        CalendarComponent,
        OrganizerComponent,
        SelectorComponent,
        TransactionComponent,
        DashboardComponent,
    ],
    imports: [
        RouterModule.forChild(dashboardRoutes),
        SharedModule,
    ],
    bootstrap: [DashboardComponent]
})
export class DashboardModule {}

