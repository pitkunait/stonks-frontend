import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnsureModuleLoadedOnceGuard } from './guards/ensureModuleLoadedOnce.guard';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../modules/app-material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ApiInterceptor } from './interceptors/api.interceptor';


@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent,
        NavbarComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AppMaterialModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: ApiInterceptor,
        multi: true,
    }],
    exports: [
        NavbarComponent
    ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {

    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        super(parentModule);
    }
}
