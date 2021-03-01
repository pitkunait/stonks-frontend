import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentPipe } from './pipes/moment.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../modules/app-material.module';


@NgModule({
    declarations: [
        MomentPipe,
    ],
    exports: [
        MomentPipe
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AppMaterialModule,
    ],
})
export class SharedModule {}
