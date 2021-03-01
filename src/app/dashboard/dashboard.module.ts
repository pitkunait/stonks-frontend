import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './components/calendar/calendar.component';
import { OrganizerComponent } from './components/organizer/organizer.component';
import { SelectorComponent } from './components/selector/selector.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from '../core/interceptors/api.interceptor';
import { TransactionComponent } from './components/transaction/transaction.component';


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
        // CommonModule
    ],
    exports: [DashboardComponent],
    bootstrap: [],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: ApiInterceptor,
        multi: true,
    }],
})
export class DashboardModule {}

