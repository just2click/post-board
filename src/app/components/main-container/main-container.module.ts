
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainContainerComponent } from './main-container.component';
import { NoteModule } from "../note-component/note.module";
import { ModalModule } from "../../directives/modal.module";

@NgModule({
    imports: [
        CommonModule, 
        ReactiveFormsModule,
        NoteModule,
        ModalModule
    ],
    exports: [MainContainerComponent],
    declarations: [MainContainerComponent],
    providers: []
})

export class MainContainerModule {}