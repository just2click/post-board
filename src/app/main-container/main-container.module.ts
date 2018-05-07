
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MainContainerComponent } from './main-container.component';
import { NoteModule } from "../note-component/note.module";

@NgModule({
    imports: [CommonModule, NoteModule],
    exports: [MainContainerComponent],
    declarations: [MainContainerComponent],
    providers: []
})

export class MainContainerModule {}