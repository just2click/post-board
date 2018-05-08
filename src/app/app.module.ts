
import { NotesService } from './services/notes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainNoteModule } from './components/main-note/main-note.module';
import { NoteModule } from './components/note-component/note.module';
import { ModalService } from './services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainNoteModule,
    NoteModule
  ],
  providers: [NotesService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
