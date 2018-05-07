import { NotesService, INote } from './../services/notes.service';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  private _notes: INote[] = [];
  private _subscription: Subscription;

  constructor(private _notesService: NotesService) { }

  ngOnInit() {
    this._subscription = this._notesService.notesUpdated.subscribe(notes => {
      this._notes = notes;
    });
  }

}
