import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'main-note',
  templateUrl: './main-note.component.html',
  styleUrls: ['./main-note.component.scss']
})
export class MainNoteComponent implements OnInit {

  public title = "Welcome to Post Board";

  constructor(private _notesService: NotesService) { }

  ngOnInit() {

    // Used for development only
    // setTimeout(() => {
    //   this._createDummyNotes();
    // }, 500);
  }

  private _createDummyNotes () {
    for (let i = 0; i < 20; i++) {
      this._notesService.addNote({
        author: 'Dror ' + i,
        description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac est ut mi pretium porta. Praesent lacus justo, blandit at rutrum quis, tempor id dui. Donec vel mauris urna. Nulla facilisi. Cras tincidunt finibus cursus. Aliquam dapibus, neque non suscipit vehicula, augue libero vulputate arcu, quis ornare lectus lorem eget tortor. Vestibulum libero eros, interdum at dapibus non, congue eget diam. Phasellus in dignissim dui, sed viverra lectus.' + 
          'Ut et tellus libero. Nullam at consequat erat. Fusce commodo leo eget nulla feugiat, non ullamcorper nunc elementum. Aliquam id nisi nisi. Curabitur eu lorem ac elit ornare volutpat. Maecenas pretium mattis ligula, at dictum erat laoreet nec. Cras lectus mi, placerat id eros vel, pretium viverra eros. Quisque fermentum, odio sed vulputate dapibus, mauris metus elementum mauris, sit amet eleifend lorem dui ut est. Aliquam erat volutpat. ',
        createdAt: new Date().getTime(),
        image_url: ''
      })
    }
  }

}
