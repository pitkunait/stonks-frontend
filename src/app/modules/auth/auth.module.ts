import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { authRoutes as routes } from './auth.routes';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule],
})
export class AuthModule { }