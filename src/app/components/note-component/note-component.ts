import { INote } from './../../services/notes.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'note-component',
  templateUrl: './note-component.html',
  styleUrls: ['./note-component.scss']
})
export class NoteComponent implements OnInit {
  constructor() { }

  @Input() note: INote;

  ngOnInit() {
  }

  public preventDefault (e) {
    e.preventDefault();
  }
}
