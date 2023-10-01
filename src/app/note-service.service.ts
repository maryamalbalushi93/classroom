import { Injectable } from '@angular/core';
export interface Note {
  id: number;
  title: string;
  content: string;
  isNew?: boolean; // Add this line

}
@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  private readonly STORAGE_KEY = 'notes';

  getNotes(): Note[] {
    const notes = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    return notes;
  }

  addNote(note: Note): void {
    const notes = this.getNotes();
    note.id = notes.length > 0 ? Math.max(...notes.map(n => n.id)) + 1 : 1;
    notes.push(note);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(notes));
  }

  deleteNote(id: number): void {
    const notes = this.getNotes();
    const updatedNotes = notes.filter(note => note.id !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedNotes));
  }
}