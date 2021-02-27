import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './core/calendar/calendar.component';
import { SelectorComponent } from './core/selector/selector.component';
import { OrganizerComponent } from './core/organizer/organizer.component';
import { MomentPipe } from './shared/pipes/moment.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TransactionsComponent } from './transactions/transactions.component';


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
