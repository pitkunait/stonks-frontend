import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EnsureModuleLoadedOnceGuard } from './guards/ensureModuleLoadedOnce.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent,
        NavbarComponent
    ],
    imports: [
        AppMaterialModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        CommonModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true, },

    ],
    exports: [
        NavbarComponent,
        AppMaterialModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule,
        CommonModule,
    ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        super(parentModule);
    }
}
