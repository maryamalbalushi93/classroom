import { Component } from '@angular/core';
import { Note, NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  newNote: Note = { id: 0, title: '', content: '', isNew: true };

  constructor(private noteService: NoteServiceService) {}

  get notes() {
    return this.noteService.getNotes();
  }
  

  addNote(): void {
    this.newNote.isNew = true;
    this.noteService.addNote(this.newNote);
    this.newNote = { id: 0, title: '', content: '' };
}

  deleteNote(id: number) {
    this.noteService.deleteNote(id);
  }
}