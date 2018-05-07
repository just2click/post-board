import { INote } from './../services/notes.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'note-component',
  templateUrl: './note-component.html',
  styleUrls: ['./note-component.scss']
})
export class NoteComponent implements OnInit {
  private isNote: boolean;  // true = a regular note, false = a button to add new note
  constructor() { }

  @Input() note: INote;

  ngOnInit() {
    console.log(this.note);
  }

  public onOpen (note) {
    // Open a modal with note content
  }

  public onAddNote () {
    // Open modal for adding a new note
  }
}
