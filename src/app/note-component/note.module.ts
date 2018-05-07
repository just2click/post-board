import { NoteComponent } from './note-component';

import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [NoteComponent],
    declarations: [NoteComponent],
    providers: []
})

export class NoteModule {}