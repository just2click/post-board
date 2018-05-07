import { NotesService } from './services/notes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainNoteModule } from './components/main-note/main-note.module';
import { NoteModule } from './components/note-component/note.module';

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
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
