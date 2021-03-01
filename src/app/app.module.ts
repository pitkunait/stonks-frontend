import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './core/interceptors/api.interceptor';


@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [
        CoreModule,
        SharedModule,
        BrowserModule,
        AppRoutingModule,
    ],
    // providers: [{
    //     provide: HTTP_INTERCEPTORS,
    //     useClass: ApiInterceptor,
    //     multi: true,
    // }],
    bootstrap: [AppComponent],
})
export class AppModule { }
