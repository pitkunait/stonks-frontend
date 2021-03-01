import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentPipe } from './pipes/moment.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material.module';
import { CoreModule } from '../core/core.module';


@NgModule({
    declarations: [
        MomentPipe,
    ],
    exports: [
        MomentPipe,
        CoreModule
    ],
    imports: [CoreModule],
})
export class SharedModule {}
