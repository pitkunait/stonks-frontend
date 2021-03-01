import { NgModule } from '@angular/core';
import { MomentPipe } from './pipes/moment.pipe';
import { AppMaterialModule } from './app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        MomentPipe,
    ],
    imports: [
        CommonModule,
        RouterModule,
        AppMaterialModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        // modules
        CommonModule,
        RouterModule,
        AppMaterialModule,
        ReactiveFormsModule,
        FormsModule,

        // pipes
        MomentPipe,
    ],
})
export class SharedModule {}
