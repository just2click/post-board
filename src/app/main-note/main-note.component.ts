import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'main-note',
  templateUrl: './main-note.component.html',
  styleUrls: ['./main-note.component.scss']
})
export class MainNoteComponent implements OnInit {

  public title = "Welcome to Post Board";

  constructor(private _notesService: NotesService) { }

  ngOnInit() {
    setTimeout(() => {
      this._createDummyNotes();
    }, 500);
  }

  private _createDummyNotes () {
    for (let i = 0; i < 20; i++) {
      this._notesService.addNote({
        author: 'Dror',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac est ut mi pretium porta. Praesent lacus justo, blandit at rutrum quis, tempor id dui. Donec vel mauris urna. Nulla facilisi. Cras tincidunt finibus cursus. Aliquam dapibus, neque non suscipit vehicula, augue libero vulputate arcu, quis ornare lectus lorem eget tortor. Vestibulum libero eros, interdum at dapibus non, congue eget diam. Phasellus in dignissim dui, sed viverra lectus.',
        createdAt: new Date().getTime(),
        image_url: ''
      })
    }
  }

}
