import { ModalComponent } from './modal.component';

import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [ModalComponent],
    declarations: [ModalComponent],
    providers: []
})

export class ModalModule {}