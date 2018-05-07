import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface INote {
  author: string,
  description: string,
  createdAt: number,
  image_url: string
}

@Injectable()
export class NotesService {

  private notes: INote[] = [];
  public notesUpdated = new Subject<INote[]>();

  constructor() {
  
  }

  public getNotes () {
    return this.notes;
  }

  public addNote(note: INote) {
    this.notes.unshift(note);
    this.notesUpdated.next(this.notes);
  }
}


