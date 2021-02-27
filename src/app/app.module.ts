import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './features/calendar/calendar.component';
import { SelectorComponent } from './features/selector/selector.component';
import { OrganizerComponent } from './features/organizer/organizer.component';
import { MomentPipe } from './shared/pipes/moment.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './features/navbar/navbar.component';
import { AppMaterialModule } from './modules/app-material.module';
import { LoginComponent } from './core/auth/login/login.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { HomeComponent } from './features/home/home.component';
import { SignupComponent } from './core/auth/signup/signup.component';
import { TransactionsComponent } from './features/transactions/transactions.component';


@NgModule({
    declarations: [
        AppComponent,
        CalendarComponent,
        SelectorComponent,
        OrganizerComponent,
        MomentPipe,
        NavbarComponent,
        LoginComponent,
        HomeComponent,
        SignupComponent,
        TransactionsComponent,
    ],
    imports: [
        AppMaterialModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
