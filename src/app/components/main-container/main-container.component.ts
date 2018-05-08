import { NotesService, INote } from './../../services/notes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ModalService } from '../../services';

@Component({
  selector: 'main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  private _notes: INote[] = [];
  private _subscription: Subscription;

  private rForm: FormGroup;
  private author: string;                     // A property for our submitted form
  private description: string = '';
  private titleAlert: string = 'This field is required';  
  private selectedNote: INote = {
    author: '',
    description: '',
    createdAt: 0,
    image_url: ''
  };

  constructor(
    private _fb: FormBuilder,
    private _notesService: NotesService,
    private _modalService: ModalService) {
      this.rForm = _fb.group({
        'author': [null, Validators.required],
        'description': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(500)])],
        'validate' : ''
  });      
    }

  ngOnInit() {
    this._subscription = this._notesService.notesUpdated.subscribe(notes => {
      this._notes = notes;
    });
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.rForm.get('author').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.rForm.get('author').setValidators(Validators.required);
        }
        this.rForm.get('author').updateValueAndValidity();
      })    
  }

  onAddNote(id: string) {
    this.openModal(id);
  }

  openModal(id: string){
    this._modalService.open(id);
  }

  closeModal(id: string){
    this._modalService.close(id);
  }

  addNote (formValue) {
    if (this.rForm.valid) {
      const note: INote = {
        author: formValue.author,
        description: formValue.description,
        createdAt: new Date().getTime(),
        image_url: ''
      }
      this._notesService.addNote(note);
      this.closeModal('addNote');
    }
  }

  showNote (note: INote) {
    this.selectedNote = note;
    setTimeout(()=> {
      this.openModal('showNote');
    }, 500);
  }
}
