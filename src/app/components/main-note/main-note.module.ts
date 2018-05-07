import { HeaderModule } from './../header/header.module';

import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MainNoteComponent } from './main-note.component';
import { MainContainerModule } from '../main-container/main-container.module';

@NgModule({
    imports: [
        CommonModule,
        HeaderModule,
        MainContainerModule
    ],
    exports: [MainNoteComponent],
    declarations: [MainNoteComponent],
    providers: []
})

export class MainNoteModule {}